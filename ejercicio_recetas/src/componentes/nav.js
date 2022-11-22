import React from "react";
import "../App.css";
import santa from "../assets/images/santa.png"

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-danger w-75 mx-auto">
        <div className="container-fluid d-flex justify-content-center">
          <a className="navbar-brand fs-2 fw-semibold text-white fst-italic" href="/welcome">
          <img src={santa} className="img-santa" alt=""></img>
            Recetas Navideñas
            
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
