/**
 * @flow
 * @relayHash 54e93e505c39dce2091b0cdac15cd21f
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppCreateTransactionMutationVariables = {|
  input: {
    amount: number;
    balanceDue: number;
    balanceRequired: number;
    from: string;
    linkedPayments: any;
    paymentInfo: any;
    to: string;
    clientMutationId: string;
  };
|};
export type AppCreateTransactionMutationResponse = {|
  +createTransaction: ?{|
    +edge: ?{|
      +node: {|
        +id: string;
        +amount: number;
        +paymentInfo: any;
        +createdAt: any;
        +updatedAt: any;
      |};
    |};
  |};
|};
*/


/*
mutation AppCreateTransactionMutation(
  $input: CreateTransactionInput!
) {
  createTransaction(input: $input) {
    edge {
      node {
        id
        amount
        paymentInfo
        createdAt
        updatedAt
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateTransactionInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppCreateTransactionMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateTransactionInput!"
          }
        ],
        "concreteType": "CreateTransactionPayload",
        "name": "createTransaction",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "TransactionEdge",
            "name": "edge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Transaction",
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
                    "name": "amount",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "paymentInfo",
                    "storageKey": null
                  },
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
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppCreateTransactionMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateTransactionInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "AppCreateTransactionMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateTransactionInput!"
          }
        ],
        "concreteType": "CreateTransactionPayload",
        "name": "createTransaction",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "TransactionEdge",
            "name": "edge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Transaction",
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
                    "name": "amount",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "paymentInfo",
                    "storageKey": null
                  },
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
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation AppCreateTransactionMutation(\n  $input: CreateTransactionInput!\n) {\n  createTransaction(input: $input) {\n    edge {\n      node {\n        id\n        amount\n        paymentInfo\n        createdAt\n        updatedAt\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
