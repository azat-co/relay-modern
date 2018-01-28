import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../createRelayEnvironment'
import Home from './Home'
import ListPage from './ListPage'

const HomeAllPostQuery = graphql`
  query HomeAllPostQuery {
    viewer {
      ...ProductList_viewer
      ...CustomerList_viewer
      ...OrdersList_viewer
    }
  }
`

class Home extends Component {
  render() {
    return (
      <div>
        <QueryRenderer
          environment={environment}
          query={HomeAllPostQuery}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <ListPage viewer={props.viewer} />
            }
            return <div>Loading</div>
          }}
        />
      </div>
    )
  }
}

export default Home