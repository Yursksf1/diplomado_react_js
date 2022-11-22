import "./App.css";
import React from "react";
import piernaAhumada from "./assets/images/pierna-ahumada.jpg";
import pinoNavi from "./assets/images/pino-navideno-toppings.jpg";
import icon from "./assets/images/christmas-decoration.png";
import pavoNavi from "./assets/images/pavo-navideno.jpg"
import tree from "./assets/images/tree.png"

function App() {
  return (
    <div className="container mt-5">
      <div className="accordion shadow-lg w-75 mx-auto" id="accordionExample">
        <div className="accordion-item shadow-lg rounded-top">
          <h1 className="accordion-header bg-green rounded-top" id="headingOne">
            <button
              className="accordion-button collapsed rounded-top fs-4 text-black fw-semibold bg-green text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Pierna ahumada de cerdo
            </button>
          </h1>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <img
                className="img-fluid w-50 rounded-4  mt-5 mb-5 mx-auto d-flex shadow1"
                src={piernaAhumada}
                alt=""
              ></img>
              <h2 className="mt-2 mb-4">Ingredientes</h2>
              <div class="list-group">
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  Pierna ahumada de cerdo de aproximadamente 3 kg
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  1 taza de miel
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  ½ taza de vinagre de vino
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  1 taza de clavos de olor
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  ½ kg de peras rojas cortadas en cuartos
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  Hojas de salvia, romero y naranjo
                </button>
              </div>
              <h2 className="mt-4 mb-4">Descripción</h2>
              <p className="mb-4 fs-5">
                1. Combina la miel y el vinagre. Calienta a fuego bajo hasta que
                se reduzca y logres un caramelo. <br></br>2. Saca la pierna de
                su empaque y haz cortes transversales por toda la superficie.
                Entierra al centro de cada rombo un clavo de olor. Barniza la
                pierna con el glaseado.<br></br>3. Espolvorea el azúcar en la
                pierna. Hornéala a 180oC por 30 minutos o hasta que notes que se
                dora la superficie. Apaga y reserva.<br></br>4. En una charola
                distribuye las hojas y las peras a tu gusto para adornar. Coloca
                la pierna al centro y llévala a la mesa.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item shadow-lg">
          <h1 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed fs-4 text-black fw-semibold bg-green text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Pino navideño de queso con toppings
            </button>
          </h1>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <img
                className="img-fluid w-50 rounded-4  mt-5 mb-5 mx-auto d-flex shadow1"
                src={pinoNavi}
                alt=""
              ></img>
              <h2 className="mt-2 mb-4">Ingredientes</h2>
              <div class="list-group">
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  2 barras de queso crema
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  1 barra de queso de cabra
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  ½ taza de crema para batir
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  1 taza de perejil picado
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  1 taza de galletas saladas
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  1 taza de pretzels
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  1 taza de almendras fileteadas
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  1 taza de uvas o arándanos
                </button>
              </div>
              <h2 className="mt-4 mb-4">Descripción</h2>
              <p className="mb-4 fs-5">
                1. Mezcla el queso crema con el queso de cabra y la crema para
                batir. Dale forma de pino y refrigera durante 30 minutos.
                <br></br>
                2. Cubre con el perejil y clava las galletas, uvas, almendras y
                pretzels.
                <br></br>
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item shadow-lg">
          <h1 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed fs-4 text-black fw-semibold bg-green text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Pavo navideño
            </button>
          </h1>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <img
                className="img-fluid w-50 rounded-4  mt-5 mb-5 mx-auto d-flex shadow1"
                src={pavoNavi}
                alt=""
              ></img>
              <h2 className="mt-2 mb-4">Ingredientes</h2>
              <div class="list-group">
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  1 pavo mediano
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  3 cdas. de paprika
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  1 taza de mermelada de chabacano
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  1 taza de mantequilla derretida
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  4 dientes de ajo exprimidos
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  ½ taza de soya
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  4 tazas de papas cambray
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  1 taza de chiles de árbol secos
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  1 taza de hojas de perejil
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  4 cdas. de aceite de oliva
                </button>
                <button
                  type="button"
                  class="list-group-item list-group-item-action fs-5"
                >
                  <img
                    className="img-fluid icon-list me-3"
                    src={icon}
                    alt=""
                  ></img>
                  1 cda. de ajo en polvo
                </button>
              </div>
              <h2 className="mt-4 mb-4">Descripción</h2>
              <p className="mb-4 fs-5">
                1. Combina la paprika, mermelada de chabacano, mantequilla, ajo
                y soya. Barniza el pavo y salpimenta, hornea a 130º C durante 1
                hora y media, vuelve a barnizar y hornea a 160 oC por 1 hora
                adicional.
                <br></br>
                2. Revuelve las papas con los chiles de árbol, aceite de oliva y
                ajo en polvo. Coloca en un refractario, cubre con aluminio y
                hornea durante 40 minutos a 160 oC junto con el pavo.
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src={tree} className="w-25 d-flex mx-auto mt-5" alt=""></img>
    </div>
  );
}

export default App;
