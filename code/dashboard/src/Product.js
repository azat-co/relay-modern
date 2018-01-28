import React from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import { withRouter } from 'react-router-dom';

class Product extends React.Component {

  render () {
    return (
      <div className='pa3 bg-black-05 ma3'>
        <div
          className='w-100'
          style={{
            backgroundImage: `url(${this.props.post.imageUrl})`,
            backgroundSize: 'cover',
            paddingBottom: '100%',
          }}
        />

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
    imageUrl
  }
`)

export default withRouter(FragmentContainer);