import React, { Component } from 'react';
import { ConnectionHandler } from 'relay-runtime';
import logo from './logo.svg';
import './App.css';
import {
  commitMutation,
  QueryRenderer,
  graphql,
} from 'react-relay'

import environment from './createRelayEnvironment'

const AppQuery = graphql`
  query AppQuery {
    viewer {
      allTransactions(first:100) @connection(key: "AppQuery_allTransactions") { 
        edges {
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
  }
`

const mutation = graphql`
  mutation AppCreateTransactionMutation ($input: CreateTransactionInput!) {
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
`
function createTransactionMutation(amount, viewerId) {
  const variables = {
    input: {
      amount: parseInt(amount,10),
      clientMutationId: "",
      balanceDue: 0,
      balanceRequired: 0,
      from: 'abc',
      linkedPayments: {a:1},
      paymentInfo: {a:1},
      to: 'xyz'      
    }
  }
  commitMutation(
    environment, // user???
    {
      mutation,
      variables,
      onError: err => console.error(err),
      updater: (store) => {
        debugger
        const payload = store.getRootField('createTransaction');

        // Get the edge of the newly created todo item
        // const newEdge = payload.getLinkedRecord('TransactionEdge');

        const newEdge = payload.getLinkedRecord('edge')
        // Add it to the user's todo list
        // sharedUpdater(store, user, newEdge);
        const userProxy = store.get('viewer-fixed');

        // Get the user's Todo List using ConnectionHandler helper
        const conn = ConnectionHandler.getConnection(
          userProxy,
          'AppQuery_allTransactions', // This is the connection identifier, defined here: https://github.com/relayjs/relay-examples/blob/master/todo/js/components/TodoList.js#L68
        );
      
        // Insert the new todo into the Todo List connection
        ConnectionHandler.insertEdgeBefore(conn, newEdge);
      }
    },
  )
}
class App extends Component {
  state = {
    amount: 0
  }
  render() {
    return (
      <QueryRenderer
      environment={environment}
      query={AppQuery}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          console.log(props)
          return <div>
            <p>Hello!</p>
            Amount <input type="text" value={this.state.amount} 
              onChange={(e) => this.setState({amount: e.target.value})}/><br/>
            <input type="button" value="send" onClick={()=>createTransactionMutation(this.state.amount, 'viewer-fixed')}/>
            <ol>
              {props.viewer.allTransactions.edges.map((node, i) => {
                console.log(node)
                return <li key={i}>{node.node.id}: {node.node.amount} {node.node.createdAt}</li>
              })}
            </ol>
            </div>
        }
        return <div>Loading</div>
      }}
    />
    )
  }
}

export default App;
