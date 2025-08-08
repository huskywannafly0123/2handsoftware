import PropTypes from 'prop-types';
import React from 'react';
import PageHeading from '@components/admin/cms/PageHeading';

export default function ProductEditPageHeading({ backUrl, product }) {
  return (
    <PageHeading
      backUrl={backUrl}
      heading={product ? `Sửa ${product.name}` : 'Tạo sản phẩm mới'}
    />
  );
}

ProductEditPageHeading.propTypes = {
  backUrl: PropTypes.string.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
};

ProductEditPageHeading.defaultProps = {
  product: null
};

export const layout = {
  areaId: 'content',
  sortOrder: 5
};

export const query = `
  query Query {
    product(id: getContextValue("productId", null)) {
      name
    }
    backUrl: url(routeId: "productGrid")
  }
`;
