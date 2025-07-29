const { execute } = require('@evershop/postgres-query-builder');

module.exports = exports = async (connection) => {
  await execute(
    connection,
    `ALTER TABLE "account" ADD COLUMN order_id INT DEFAULT NULL;
     ALTER TABLE "account" ADD CONSTRAINT "FK_ORDER_ACCOUNT" FOREIGN KEY (order_id) REFERENCES "order" (order_id) ON DELETE SET NULL;`
  );
}; 