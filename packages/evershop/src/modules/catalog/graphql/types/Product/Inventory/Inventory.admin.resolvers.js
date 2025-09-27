const { select } = require('@evershop/postgres-query-builder');
module.exports = {
  Inventory: {
    qty: (inventory) => inventory.qty || 0,
    accounts: async (product, _, { pool }) => {
      const accounts = await select()
        .from('account')
        .where('product_id', '=', product.productId)
        .and('status', '=', 'active')
        .execute(pool);
      return accounts;
    }
  }
};
