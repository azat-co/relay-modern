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
            customer {
              name
            }
            products {
              count
              edges {
                node {
                  name
                }
              }
            }
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
                  <h2>Orders</h2>
                    {props.viewer.allOrders.edges.map((node, i)=><div key={i}>
                      {node.node.customer.name} bought {node.node.products.count} products
                    </div>)}
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