import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from './createRelayEnvironment'

import ProductList from './ProductList'
import CustomerList from './CustomerList'

const HomeQuery = graphql`
  query HomeQuery {
    viewer {
      ...ProductList_viewer
      ...CustomerList_viewer
      allOrders {
        edges {
          node {
            id
          }
        }
      }
    }

  }
`

class Home extends Component {
  render() {
    
    return (
      <div className="row">
        <QueryRenderer
          environment={environment}
          query={HomeQuery}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              console.log(props)
              return <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <ProductList viewer={props.viewer} />
                  </div>
                  <div className="col-sm">
                    
                  </div>
                  <div className="col-sm">
                    <CustomerList viewer={props.viewer} />
                  </div>
                </div>
              </div>
            }
            return <div>Loading</div>
          }}
        />
      </div>
    )
  }
}

export default Home