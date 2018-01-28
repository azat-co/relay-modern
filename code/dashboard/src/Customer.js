import React from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import { withRouter } from 'react-router-dom';

class Product extends React.Component {

  render () {
    return (
      <div className=''>
        {this.props.customer.name} joined {this.props.customer.createdAt}
      </div>
    )
  }


}

const FragmentContainer =  createFragmentContainer(Product, graphql`
  fragment Customer_viewer on Viewer {
    id
  }
  fragment Customer_customer on Customer {
    id
    name
    createdAt
    updatedAt
  }
`)

export default FragmentContainer