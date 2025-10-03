const {
  INVALID_PAYLOAD,
  INTERNAL_SERVER_ERROR,
  OK
} = require('@evershop/evershop/src/lib/util/httpStatus');
const {
  getConnection
} = require('@evershop/evershop/src/lib/postgres/connection');
const { getEnv } = require('@evershop/evershop/src/lib/util/getEnv');
const { select } = require('@evershop/postgres-query-builder');
const { Resend } = require('resend');
// eslint-disable-next-line no-unused-vars
module.exports = async (request, response, delegate) => {
  const connection = await getConnection();
  try {
    const query = select().from('account').where('order_id', '=', request.params.orderId);
    const accounts = await query.load(connection);
    const secretKey = getEnv('SECRET_KEY');
    const decryptedAccounts = (Array.isArray(accounts) ? accounts : [accounts]).map(account => {
      if (account.password && account.username) {
        if (!isEncryptedString(account.password)) return account;
        const decryptedPassword = decrypt(account.password, secretKey + account.username);
        return {
          ...account,
          password: decryptedPassword
        };
      }
      return account;
    });
    const connection1 = await getConnection();
    const orderQuery = select().from('order').where('order_id', '=', request.params.orderId);
    let orderResult = await orderQuery.load(connection1);
    if (orderResult && !Array.isArray(orderResult)) orderResult = [orderResult];
    const customerEmail = orderResult.length > 0 ? orderResult[0].customer_email : null;
    if (customerEmail) {
      const resend = new Resend(getEnv('RESEND_API_KEY'));
      // Format decryptedAccounts as a readable string
      const accountsText = decryptedAccounts.map(acc =>
        `Username: ${acc.username}\nPassword: ${acc.password}\n`
      ).join('\n');
      await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>', // Replace with your verified sender
        to: customerEmail,
        subject: 'Your Account Details',
        text: `Here are your account details:\n\n${accountsText}`
      });
    }
    connection1.release();
  }
  catch (error) {
    console.error("Error sending account detail:", error);
  }
  response.status(OK);
};

function isEncryptedString(str) {
  if (typeof str !== 'string') return false;

  const parts = str.split(':');
  if (parts.length !== 2) return false;

  const [ivHex, encryptedHex] = parts;

  // Check IV (16 bytes = 32 hex chars)
  if (!/^[0-9a-f]{32}$/i.test(ivHex)) return false;

  // Check ciphertext (must be valid hex and at least 2 chars)
  if (!/^[0-9a-f]+$/i.test(encryptedHex)) return false;

  return true;
}