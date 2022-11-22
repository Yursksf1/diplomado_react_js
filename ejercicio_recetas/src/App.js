import "./App.css";
import React from "react";
import piernaAhumada from "./assets/images/pierna-ahumada.jpg";
import pinoNavi from "./assets/images/pino-navideno-toppings.jpg";
import icon from "./assets/images/christmas-decoration.png";
import pavoNavi from "./assets/images/pavo-navideno.jpg"
import tree from "./assets/images/tree.png"


function Ingrediente(props) {
  const { ingrediente } = props
  return (
    <button
    type="button"
    class="list-group-item list-group-item-action fs-5"
    >
      <img
        className="img-fluid icon-list me-3"
        src={icon}
        alt=""
      ></img>
      {ingrediente}
    </button>
  )
}

function Ingredientes(props) {
  const {ingredientes} = props
  const lista =  ingredientes.map( (ingrediente) => {
    return <Ingrediente ingrediente={ingrediente} />
  } 
)
return (
  <div>
    {lista}
  </div>
  )
}

function Receta(props) {
  const { title, description, imagen, ingredientes, idElement, idTarget} = props;
  return(
    <div class="accordion-item shadow-lg">
    <h1 class="accordion-header" id={idElement}>
      <button
        class="accordion-button collapsed fs-4 text-black fw-semibold bg-green text-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${idTarget}`}
        aria-expanded="false"
        aria-controls={idTarget}
      >
        {title}
      </button>
    </h1>
    <div
      id={idTarget}
      class="accordion-collapse collapse"
      aria-labelledby={idElement}
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <img
          className="img-fluid w-50 rounded-4  mt-5 mb-5 mx-auto d-flex shadow1"
          src={imagen}
          alt=""
        ></img>
        <h2 className="mt-2 mb-4">Ingredientes</h2>
        <div class="list-group">
        <Ingredientes
          ingredientes={ingredientes}
        />
        </div>
        <h2 className="mt-4 mb-4">Descripción</h2>
        <p className="mb-4 fs-5">
          {description}

          <br></br>
        </p>
      </div>
    </div>
  </div>
  )
}

function App() {
  return (
    <div className="container mt-5">
      <div className="accordion shadow-lg w-75 mx-auto" id="accordionExample">    
      <Receta
        title="Pierna ahumada de cerdo"
        idElement="e_uno"
        idTarget="t_uno"
        ingredientes = {[
          "Pierna ahumada de cerdo de aproximadamente 3 kg",
          "1 taza de miel",
          "½ taza de vinagre de vino"
          ]}
        imagen={piernaAhumada}
        description="1. Combina la paprika, mermelada de chabacano, mantequilla, ajo
        y soya. Barniza el pavo y salpimenta, hornea a 130º C durante 1
        hora y media, vuelve a barnizar y hornea a 160 oC por 1 hora
        adicional.
        2. Revuelve las papas con los chiles de árbol, aceite de oliva y
        ajo en polvo. Coloca en un refractario, cubre con aluminio y
        hornea durante 40 minutos a 160 oC junto con el pavo."
      />
      <Receta
        title="Pino navideño de queso con toppings"
        imagen={pinoNavi}
        idElement="e_dos"
        idTarget="t_dos"
        ingredientes = {[1,2,3,4,5]}
        description="1. Mezcla el queso crema con el queso de cabra y la crema para
        batir. Dale forma de pino y refrigera durante 30 minutos.
        2. Cubre con el perejil y clava las galletas, uvas, almendras y
        pretzels."

      />
      <Receta
        title="Pavo navideño"
        idElement="e_tres"
        idTarget="t_tres"
        imagen={pavoNavi}
        ingredientes = {[1,2,3,4,5]}
        description=" 1. Combina la miel y el vinagre. Calienta a fuego bajo hasta que
        se reduzca y logres un caramelo. 2. Saca la pierna de
        su empaque y haz cortes transversales por toda la superficie.
        Entierra al centro de cada rombo un clavo de olor. Barniza la
        pierna con el glaseado.3. Espolvorea el azúcar en la
        pierna. Hornéala a 180oC por 30 minutos o hasta que notes que se
        dora la superficie. Apaga y reserva.4. En una charola
        distribuye las hojas y las peras a tu gusto para adornar. Coloca
        la pierna al centro y llévala a la mesa."

      />
        
      </div>
      <img src={tree} className="w-25 d-flex mx-auto mt-5" alt=""></img>
    </div>
  );
}

export default App;
