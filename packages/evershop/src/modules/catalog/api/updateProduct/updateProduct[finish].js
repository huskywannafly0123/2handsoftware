const updateProduct = require('../../services/product/updateProduct');

// eslint-disable-next-line no-unused-vars
module.exports = async (request, response, delegate) => {
  const currentAdminUser = request.getCurrentUser();
  const product = await updateProduct(request.params.id, request.body, {
    routeId: request.currentRoute.id,
    user: currentAdminUser
  });
  return product;
};
