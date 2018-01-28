import React from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class ProductList extends React.Component {

  render () {
    console.log('Product List - render - environment', this.props.relay.environment)
    return (
      <div className=''>
        <h2>Product List</h2>
        <div className='' style={{ maxWidth: 400 }}>
          {this.props.viewer.allProducts.edges.map(({node}) =>
            <Product key={node.id} product={node} viewer={this.props.viewer} />
          )}
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(ProductList, graphql`
  fragment ProductList_viewer on Viewer {
    ...Product_viewer
    allProducts(last: 100, orderBy: name_DESC) @connection(key: "ProductList_allProducts", filters: []) {
      edges {
        node {
          id
          description
          name
          imageUrl
          ...Product_product
        }
      }
    }
  }
`)