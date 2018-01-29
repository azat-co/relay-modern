import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  QueryRenderer,
  graphql
} from 'react-relay'

import environment from './createRelayEnvironment'

const AppQuery = graphql`
  query AppQuery {
    viewer {
      allTransactions {
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
class App extends Component {
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
            <ol>
              {props.viewer.allTransactions.edges.map((node, i) => {
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
