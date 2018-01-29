import React from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay';


class Product extends React.Component {

  render () {
    console.log(this.props)
    return (
      <div className=''>
        {this.props.product.name}<br/>
        {this.props.product.description}<br/>
        {JSON.stringify(this.props.product.orders)}<br/>
        {this.props.product.updatedAt}<br/>
        {this.props.product.createdAt}<br/>
        {this.props.product.imageUrl}<br/>
        {/* <div
          className='w-100'
          style={{
            height: 150,
            backgroundImage: `url(${this.props.product.imageUrl})`,
            backgroundSize: 'cover',
            paddingBottom: '100%',
          }}
        /> */}

      </div>
    )
  }
}

const FragmentContainer =  createFragmentContainer(Product, graphql`
  fragment Product_viewer on Viewer {
    id
  }
  fragment Product_product on Product {
    id
    description
    name
    orders {
      edges {
        node {
          id
          createdAt
        }
      }
    }
    imageUrl
    createdAt
    updatedAt
  }
`)

export default FragmentContainer