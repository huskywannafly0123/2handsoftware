/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Area from '@components/common/Area';
import Pagination from '@components/common/grid/Pagination';
import StatusRow from '@components/common/grid/rows/StatusRow';
import BasicRow from '@components/common/grid/rows/BasicRow';
import { Card } from '@components/admin/cms/Card';
import CustomerNameRow from '@components/admin/customer/customerGrid/rows/CustomerName';
import CreateAt from '@components/admin/customer/customerGrid/rows/CreateAt';
import SortableHeader from '@components/common/grid/headers/Sortable';

export default function CustomerGrid({
  product
}) {
  // const page = currentFilters.find((filter) => filter.key === 'page')
  //   ? parseInt(currentFilters.find((filter) => filter.key === 'page').value, 10)
  //   : 1;
  // const limit = currentFilters.find((filter) => filter.key === 'limit')
  //   ? parseInt(
  //       currentFilters.find((filter) => filter.key === 'limit').value,
  //       10
  //     )
  //   : 20;
  // const [selectedRows, setSelectedRows] = useState([]);
  const accounts = product?.inventory?.accounts || [];
  // console.log('accounts', accounts);
  return (
    <Card title="Selling account">
      {/* <Card.Session
        title={
          <Form submitBtn={false} id="customerGridFilter">
            <div className="flex gap-8 justify-center items-center">
              <Area
                id="customerGridFilter"
                noOuter
                coreComponents={[
                  {
                    component: {
                      default: () => (
                        <Field
                          type="text"
                          id="keyword"
                          name="keyword"
                          placeholder="Search"
                          value={
                            currentFilters.find((f) => f.key === 'keyword')
                              ?.value
                          }
                          onKeyPress={(e) => {
                            // If the user press enter, we should submit the form
                            if (e.key === 'Enter') {
                              const url = new URL(document.location);
                              const keyword =
                                document.getElementById('keyword')?.value;
                              if (keyword) {
                                url.searchParams.set('keyword', keyword);
                              } else {
                                url.searchParams.delete('keyword');
                              }
                              window.location.href = url;
                            }
                          }}
                        />
                      )
                    },
                    sortOrder: 5
                  },
                  {
                    component: {
                      default: () => (
                        <Filter
                          options={[
                            {
                              label: 'Selled',
                              value: '1',
                              onSelect: () => {
                                const url = new URL(document.location);
                                url.searchParams.set('status', 1);
                                window.location.href = url;
                              }
                            },
                            {
                              label: 'Selling',
                              value: '0',
                              onSelect: () => {
                                const url = new URL(document.location);
                                url.searchParams.set('status', 0);
                                window.location.href = url;
                              }
                            }
                          ]}
                          selectedOption={
                            currentFilters.find((f) => f.key === 'status')
                              ? currentFilters.find((f) => f.key === 'status')
                                  .value === '1'
                                ? 'Enabled'
                                : 'Disabled'
                              : undefined
                          }
                          title="Status"
                        />
                      )
                    },
                    sortOrder: 10
                  }
                ]}
                
              />
            </div>
          </Form>
        }
        actions={[
          {
            variant: 'interactive',
            name: 'Clear filter',
            onAction: () => {
              // Just get the url and remove all query params
              const url = new URL(document.location);
              url.search = '';
              window.location.href = url.href;
            }
          }
        ]}
      /> */}
      <table className="listing sticky">
        <thead>
          <tr>
            {/* <th className="align-bottom">
              <Checkbox
                onChange={(e) => {
                  if (e.target.checked)
                    setSelectedRows(customers.map((c) => c.uuid));
                  else setSelectedRows([]);
                }}
              />
            </th> */}
            <Area
              id="customerGridHeader"
              noOuter
              coreComponents={[
                {
                  // eslint-disable-next-line react/no-unstable-nested-components
                  component: {
                    default: () => (
                      <SortableHeader
                        title="Account"
                        name="account"
                        
                      />
                    )
                  },
                  sortOrder: 10
                },
                // {
                //   // eslint-disable-next-line react/no-unstable-nested-components
                //   component: {
                //     default: () => (
                //       <SortableHeader
                //         title="Created Date"
                //         name="created_date"
                        
                //       />
                //     )
                //   },
                //   sortOrder: 15
                // },
                {
                  // eslint-disable-next-line react/no-unstable-nested-components
                  component: {
                    default: () => (
                      <SortableHeader
                        title="Sold Date"
                        name="selled_date"
                        
                      />
                    )
                  },
                  sortOrder: 20
                },
                {
                  // eslint-disable-next-line react/no-unstable-nested-components
                  component: {
                    default: () => (
                      <SortableHeader
                        title="Status"
                        name="status"
                        
                      />
                    )
                  },
                  sortOrder: 15
                }
              ]}
            />
          </tr>
        </thead>
        <tbody>
          {/* <Actions
            customers={customers}
            selectedIds={selectedRows}
            setSelectedRows={setSelectedRows}
          /> */}
          {accounts.map((c) => (
            <tr key={c.username}>
              {/* <td>
                <Checkbox
                  isChecked={selectedRows.includes(c.uuid)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedRows(selectedRows.concat([c.uuid]));
                    } else {
                      setSelectedRows(
                        selectedRows.filter((row) => row !== c.uuid)
                      );
                    }
                  }}
                />
              </td> */}
              <Area
                id="customerGridRow"
                row={c}
                noOuter
                coreComponents={[
                  {
                    // eslint-disable-next-line react/no-unstable-nested-components
                    component: {
                      default: ({ areaProps }) => (
                        <BasicRow id="username" areaProps={areaProps} />
                      )
                    },
                    sortOrder: 10
                  },
                  // {
                  //   // eslint-disable-next-line react/no-unstable-nested-components
                  //   component: {
                  //     default: ({ areaProps }) => (
                  //       <BasicRow id="email" areaProps={areaProps} />
                  //     )
                  //   },
                  //   sortOrder: 15
                  // },
                  {
                    // eslint-disable-next-line react/no-unstable-nested-components
                    component: {
                      default: ({ areaProps }) => (
                        <BasicRow id="status" areaProps={areaProps} />
                      )
                    },
                    sortOrder: 20
                  },
                  {
                    // eslint-disable-next-line react/no-unstable-nested-components
                    component: {
                      default: ({ areaProps }) => (
                        <BasicRow id="sold_at" areaProps={areaProps} />
                      )
                    },
                    sortOrder: 25
                  }
                ]}
              />
            </tr>
          ))}
        </tbody>
      </table>
      {accounts.length === 0 && (
        <div className="flex w-full justify-center">
          There is no account to display
        </div>
      )}
      {/* <Pagination total={total} limit={limit} page={page} /> */}
    </Card>
  );
}

CustomerGrid.propTypes = {
  product: PropTypes.shape({
    inventory: PropTypes.shape({
      qty: PropTypes.number,
      accounts: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          status: PropTypes.string,
          sold_at: PropTypes.string
        })
      )
    })
  })
};

export const layout = {
  areaId: 'leftSide',
  sortOrder: 30
};

export const query = `
  query Query {
    product(id: getContextValue("productId", null)) {
      inventory {
        qty
        accounts {
          username
          status
          sold_at
        }
      }
    }
  }
`;

export const variables = `
{
  filters: getContextValue('filtersFromUrl')
}`;
