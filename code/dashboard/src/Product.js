import React from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay';


class Product extends React.Component {
  state = {
    visibleDetails: false
  }
  render() {
    // console.log(this.props)
    if (this.state.visibleDetails) return (     
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={this.props.product.imageUrl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.props.product.name}</h5>
            <p className="card-text">{this.props.product.description}</p>
            <p>Orders: {this.props.product.orders.edges.length}</p>
            <a href="#" onClick={()=>{this.setState({visibleDetails: false})}} className="btn btn-info">hide</a>
        </div>
      </div>
    ) 
    else return <h5 className="card-title"><a href="#" onClick={()=>{this.setState({visibleDetails: true})}} >{this.props.product.name}</a></h5>
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