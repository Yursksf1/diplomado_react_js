import React from 'react';
import ReactDOM from 'react-dom/client';
import Item from './Item'
import "./Color.css"
import manzana from '../images/manzana.jpg'
import pera from '../images/pera.jpg'
import Table from 'react-bootstrap/Table';


class Carrito extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black"
    };
  }

  changeColor = (color) => {
    console.log('test')
    this.setState({color: color});
  }


  render() {
    const { color } = this.state
    let nombre_clase = 'contenido_color_black'

    if (color=="blue") {
      nombre_clase = 'contenido_color_blue'
    } else if (color=="yellow") {
      nombre_clase = 'contenido_color_yellow'

    }
     
    return (
      <div className='container'>
        <h1>Mi lista de compras</h1>
        <ul className="list-group">
          <Item item={'manzana'} imagen={manzana} /> 
          <Item item={'pera'} imagen={pera}/> 
          <button
            onClick={() => this.changeColor("blue")}
        >
        change color blue
      </button>
      <button
            onClick={() => this.changeColor("yellow")}
        >
        change color yellow
      </button>
          <p className={nombre_clase}>
            {color}
          </p>
          {/* agregar items: uvas, fresas, piña */}
        </ul>

      </div>
    );
  }
}

export default Carrito
