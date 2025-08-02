import PropTypes from 'prop-types';
import React from 'react';
import AttributeIcon from '@heroicons/react/solid/esm/HashtagIcon';
import CategoryIcon from '@heroicons/react/solid/esm/LinkIcon';
import CollectionIcon from '@heroicons/react/solid/esm/TagIcon';
import ProductIcon from '@heroicons/react/solid/esm/ArchiveIcon';
import NavigationItemGroup from '@components/admin/cms/NavigationItemGroup';

export default function CatalogMenuGroup({
  productGrid,
  categoryGrid,
  attributeGrid,
  collectionGrid,
  user
}) {
  return (
    <NavigationItemGroup
      id="catalogMenuGroup"
      name="Catalog"
      items={[
        {
          Icon: ProductIcon,
          url: productGrid,
          title: 'Sản phẩm'
        },
        {
          Icon: CategoryIcon,
          url: categoryGrid,
          title: 'Danh mục'
        },
        {
          Icon: CollectionIcon,
          url: collectionGrid,
          title: 'Bộ sưu tập'
        },
        {
          Icon: AttributeIcon,
          url: attributeGrid,
          title: 'Attributes'
        }
      ]}
    />
  );
}

CatalogMenuGroup.propTypes = {
  attributeGrid: PropTypes.string.isRequired,
  categoryGrid: PropTypes.string.isRequired,
  collectionGrid: PropTypes.string.isRequired,
  productGrid: PropTypes.string.isRequired,
  user: PropTypes.any
};

export const layout = {
  areaId: 'adminMenu',
  sortOrder: 20
};

export const query = `
  query Query {
    productGrid: url(routeId:"productGrid")
    categoryGrid: url(routeId:"categoryGrid")
    attributeGrid: url(routeId:"attributeGrid")
    collectionGrid: url(routeId:"collectionGrid")
    user: currentAdminUser{
      role
      adminUserId
    }
  }
`;
