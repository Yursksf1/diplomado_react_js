import React from "react";
import ReactDOM from "react-dom/client";
import Item from "./Item";
import "./Color.css";
import manzana from "../images/manzana.jpg";
import pera from "../images/pera.jpg";
import uva from "../images/uva.png";
import pina from "../images/pina.png";
import fresa from "../images/fresa.jpg";

class Carrito extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  };

  render() {
    return (
      <div className="container">
        <h1>Mi lista de compras</h1>
        <ul className="list-group">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Imagen</th>
              </tr>
            </thead>
            <tbody>
              <Item item={"manzana"} imagen={manzana} number={"1"} />
              <Item item={"pera"} imagen={pera} number={"2"} />
              <Item item={"uva"} imagen={uva} number={"3"} />
              <Item item={"fresa"} imagen={fresa} number={"4"} />
              <Item item={"piña"} imagen={pina} number={"5"} />
            </tbody>
          </table>

          {/* agregar items: uvas, fresas, piña */}
        </ul>
      </div>
    );
  }
}

export default Carrito;
