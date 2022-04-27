import React from 'react';
import request from '../../helpers/request';

class Storefront extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.loadInfo();
  }

  async loadInfo() {
    const {category} = this.props;
    const response = await request(`https://fakestoreapi.com/products/category/${category}`, 'get');
    this.setState({data: response.data});
  }

  render() {
    return (
      <div>
        {this.state.data.length === 0 ? <h1 data-testid={'no-items-label'}> No hay items</h1> :
          this.state.data.map((v, i) => <div key={`item=${i}`} data-testid={`items-container-${i}`}>
            <h1>{v.title}</h1>
            <h2>{v.description}</h2>
            <h3>${v.price}</h3>
          </div>
        )}
      </div>
    )
  }

}

export default Storefront;
