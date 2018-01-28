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
    }
  }
`

class Home extends Component {
  render() {
    return (
      <div>
        <QueryRenderer
          environment={environment}
          query={HomeQuery}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <div>
                <ProductList viewer={props.viewer} />
                <CustomerList viewer={props.viewer}/>
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