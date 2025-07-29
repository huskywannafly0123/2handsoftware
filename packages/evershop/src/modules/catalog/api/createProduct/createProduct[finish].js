const createProduct = require('../../services/product/createProduct');

// eslint-disable-next-line no-unused-vars
module.exports = async (request, response, delegate) => {
  const currentAdminUser = request.getCurrentUser();
  const result = await createProduct(request.body, {
    routeId: request.currentRoute.id,
    user: currentAdminUser
  });
  return result;
};
