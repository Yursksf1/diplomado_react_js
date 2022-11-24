import React from 'react';
import ReactDOM from 'react-dom/client';
import Item from './Item'

class Carrito extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>Mi lista de compras</h1>
        <ul>
        <Item item={'manzana'}/> 

        </ul>
      </div>
    );
  }
}

export default Carrito
