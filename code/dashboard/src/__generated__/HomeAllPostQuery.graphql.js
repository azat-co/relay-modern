/**
 * @flow
 * @relayHash f5cda31527b51bb475dc8dbf319f1ed7
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type HomeAllPostQueryResponse = {|
  +viewer: {| |};
|};
*/


/*
query HomeAllPostQuery {
  viewer {
    ...ProductList_viewer
    ...CustomerList_viewer
    id
  }
}

fragment ProductList_viewer on Viewer {
  ...Product_viewer
  allProducts(last: 100, orderBy: createdAt_DESC) {
    edges {
      node {
        id
        description
        name
        imageUrl
        ...Product_product
      }
    }
    ... on ProductConnection {
      edges {
        cursor
        node {
          __typename
          id
        }
      }
      pageInfo {
        hasPreviousPage
        startCursor
      }
    }
  }
}

fragment CustomerList_viewer on Viewer {
  ...Customer_viewer
  allCustomers(last: 100, orderBy: createdAt_DESC) {
    edges {
      node {
        id
        name
        ...Customer_customer
      }
    }
    ... on CustomerConnection {
      edges {
        cursor
        node {
          __typename
          id
        }
      }
      pageInfo {
        hasPreviousPage
        startCursor
      }
    }
  }
}

fragment Customer_viewer on Viewer {
  id
}

fragment Customer_customer on Customer {
  id
  name
  createdAt
  updatedAt
}

fragment Product_viewer on Viewer {
  id
}

fragment Product_product on Product {
  id
  description
  imageUrl
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeAllPostQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProductList_viewer",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "CustomerList_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "HomeAllPostQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "HomeAllPostQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Viewer",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 100,
                    "type": "Int"
                  },
                  {
                    "kind": "Literal",
                    "name": "orderBy",
                    "value": "createdAt_DESC",
                    "type": "ProductOrderBy"
                  }
                ],
                "concreteType": "ProductConnection",
                "name": "allProducts",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "ProductEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Product",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "description",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "name",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "imageUrl",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "ProductConnection",
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "ProductEdge",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "cursor",
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "Product",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "__typename",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "PageInfo",
                        "name": "pageInfo",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "hasPreviousPage",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "startCursor",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ]
                  }
                ],
                "storageKey": "allProducts{\"last\":100,\"orderBy\":\"createdAt_DESC\"}"
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 100,
                    "type": "Int"
                  },
                  {
                    "kind": "Literal",
                    "name": "orderBy",
                    "value": "createdAt_DESC",
                    "type": "ProductOrderBy"
                  }
                ],
                "handle": "connection",
                "name": "allProducts",
                "key": "ProductList_allProducts",
                "filters": []
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 100,
                    "type": "Int"
                  },
                  {
                    "kind": "Literal",
                    "name": "orderBy",
                    "value": "createdAt_DESC",
                    "type": "CustomerOrderBy"
                  }
                ],
                "concreteType": "CustomerConnection",
                "name": "allCustomers",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "CustomerEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Customer",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "name",
                            "storageKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Customer",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "createdAt",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "updatedAt",
                                "storageKey": null
                              }
                            ]
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "CustomerConnection",
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "CustomerEdge",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "cursor",
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "Customer",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "__typename",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "PageInfo",
                        "name": "pageInfo",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "hasPreviousPage",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "startCursor",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ]
                  }
                ],
                "storageKey": "allCustomers{\"last\":100,\"orderBy\":\"createdAt_DESC\"}"
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 100,
                    "type": "Int"
                  },
                  {
                    "kind": "Literal",
                    "name": "orderBy",
                    "value": "createdAt_DESC",
                    "type": "CustomerOrderBy"
                  }
                ],
                "handle": "connection",
                "name": "allCustomers",
                "key": "CustomerList_allCustomers",
                "filters": []
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query HomeAllPostQuery {\n  viewer {\n    ...ProductList_viewer\n    ...CustomerList_viewer\n    id\n  }\n}\n\nfragment ProductList_viewer on Viewer {\n  ...Product_viewer\n  allProducts(last: 100, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        id\n        description\n        name\n        imageUrl\n        ...Product_product\n      }\n    }\n    ... on ProductConnection {\n      edges {\n        cursor\n        node {\n          __typename\n          id\n        }\n      }\n      pageInfo {\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n}\n\nfragment CustomerList_viewer on Viewer {\n  ...Customer_viewer\n  allCustomers(last: 100, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        id\n        name\n        ...Customer_customer\n      }\n    }\n    ... on CustomerConnection {\n      edges {\n        cursor\n        node {\n          __typename\n          id\n        }\n      }\n      pageInfo {\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n}\n\nfragment Customer_viewer on Viewer {\n  id\n}\n\nfragment Customer_customer on Customer {\n  id\n  name\n  createdAt\n  updatedAt\n}\n\nfragment Product_viewer on Viewer {\n  id\n}\n\nfragment Product_product on Product {\n  id\n  description\n  imageUrl\n}\n"
};

module.exports = batch;
