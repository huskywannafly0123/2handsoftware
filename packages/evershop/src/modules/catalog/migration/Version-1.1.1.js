const { execute } = require('@evershop/postgres-query-builder');

module.exports = exports = async (connection) => {
  await execute(
    connection,
    `ALTER TABLE "account" ALTER COLUMN "password" DROP NOT NULL, ALTER COLUMN "password" SET DEFAULT NULL;`
  );
}; 