import PropTypes from 'prop-types';
import React from 'react';
import { Field } from '@components/common/form/Field';
import { Card } from '@components/admin/cms/Card';

export default function Status({ product }) {
  return (
    <Card title="Trạng thái sản phẩm" subdued>
      <Card.Session>
        <Field
          id="status"
          name="status"
          value={product?.status === undefined ? 1 : product.status}
          label="Status"
          options={[
            { value: 0, text: 'Ngừng hoạt động' },
            { value: 1, text: 'Đang hoạt động' }
          ]}
          type="radio"
        />
      </Card.Session>
      <Card.Session>
        <Field
          id="visibility"
          name="visibility"
          value={product?.visibility === undefined ? 1 : product.visibility}
          label="Hiển thị"
          options={[
            { value: 0, text: 'Ẩn' },
            { value: 1, text: 'Hiện' }
          ]}
          type="radio"
        />
      </Card.Session>
    </Card>
  );
}

Status.propTypes = {
  product: PropTypes.shape({
    status: PropTypes.number.isRequired,
    visibility: PropTypes.number.isRequired
  })
};

Status.defaultProps = {
  product: {
    status: 1,
    visibility: 1
  }
};

export const layout = {
  areaId: 'rightSide',
  sortOrder: 10
};

export const query = `
  query Query {
    product(id: getContextValue("productId", null)) {
      status
      visibility
      category {
        value: categoryId
        label: name
      }
    }
  }
`;
