import PropTypes from 'prop-types';
import React from 'react';
import { Field } from '@components/common/form/Field';
import { Card } from '@components/admin/cms/Card';
import InventoryManagementButton from './InventoryManagementButton';

export default function Inventory({ product, inventoryManagementButtonUrl }) {
  const inventory = product?.inventory || {};
  return (
    <Card title="Inventory">
      <InventoryManagementButton 
        inventoryManagementButtonUrl={inventoryManagementButtonUrl}
      />
    </Card>
  );
}

Inventory.propTypes = {
  inventoryManagementButtonUrl: PropTypes.string.isRequired,
  product: PropTypes.shape({
    inventory: PropTypes.shape({
      qty: PropTypes.number,
      stockAvailability: PropTypes.number,
      manageStock: PropTypes.number
    })
  })
};

Inventory.defaultProps = {
  product: {
    inventory: {
      qty: 0,
      stockAvailability: 0,
      manageStock: 0
    }
  }
};

export const layout = {
  areaId: 'rightSide',
  sortOrder: 15
};
export const query = `
  query Query {
    inventoryManagementButtonUrl: url(routeId: "inventoryManagement", params: [{key: "id", value: getContextValue("productUuid", "welcome")}]),
    product(id: getContextValue("productId", null)) {
      inventory {
        qty
        stockAvailability
        manageStock
      }
    }
  }
`;
