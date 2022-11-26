import React from 'react';
import ReactDOM from 'react-dom/client';
import Item from './Item'
import "./Color.css"
import manzana from '../images/manzana.jpg'
import pera from '../images/pera.jpg'

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
      <div className='container'>
        <h1>Mi lista de compras</h1>
        <ul className="list-group">
          <Item item={'manzana'} imagen={manzana} /> 
          <Item item={'pera'} imagen={pera}/> 
          {/* agregar items: uvas, fresas, piña */}
        </ul>

      </div>
    );
  }
}

export default Carrito
