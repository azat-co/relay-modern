import React from 'react'
import Post from './Post'
import { Link } from 'react-router-dom'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class ProductList extends React.Component {

  render () {
    console.log('ListPage - render - environment', this.props.relay.environment)
    return (
      <div className='w-100 flex justify-center'>
        <Link to='/create' className='fixed bg-white top-0 right-0 pa4 ttu dim black no-underline'>
          + New Post
        </Link>
        <div className='w-100' style={{ maxWidth: 400 }}>
          {this.props.viewer.allPosts.edges.map(({node}) =>
            <Post key={node.id} post={node} viewer={this.props.viewer} />
          )}
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(ListPage, graphql`
  fragment ProductList_viewer on Viewer {
    ...Product_viewer
    allProducts(last: 100, orderBy: createdAt_DESC) @connection(key: "ProductList_allProducts", filters: []) {
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