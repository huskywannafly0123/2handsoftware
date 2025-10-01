const { execute } = require('@evershop/postgres-query-builder');

module.exports = exports = async (connection) => {
  await execute(
    connection,
    `ALTER TABLE "account" ADD COLUMN order_id INT DEFAULT NULL;`
  );
}; 