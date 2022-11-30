import "./App.css";
import React from "react";

function Titulo(props) {
  const { title } = props;
  return (
    <ul className="nav nav-tabs border border-0" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link active fw-bold fs-5 mt-5 rounded-pill border border-0 bg-info text-white shadow-lg border ms-4 mb-3" >{title}</button>
      </li>
    </ul>
  );
}

function Cursos(props) {
  const { title, description, video } = props;
  return (
    <div className="card w-25 mt-2 ms-4 me-4 shadow-lg rounded-5">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <iframe
          width="300"
          height="250"
          src={video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h5>Descripcion:</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App mt-2 mb-4">
      <Titulo title="Fundamentos de Musica" />
      <div className="tab-content d-flex" id="myTabContent">
        <Cursos
          title="introduccion"
          description="en esta clase aprenderas conseptos basicos de musica."
          video="https://www.youtube.com/embed/3m2k16uKbwM"
        />
        <Cursos
          title="Ritmo, Melodía y Armonía"
          description="En este video te cuento como funciona la música, te explico a detalle los conceptos de melodía, armonía y ritmo (conceptos básicos de fl studio), con ayuda del programa de producción musical fl estudio."
          video="https://www.youtube.com/embed/VgALuTc-j8U"
        />
      </div>
      {/* curso 2 */}
      <Titulo title="Tecnica Vocal" />
      <div className="tab-content d-flex" id="myTabContent">
        <Cursos
          title="Técnica Vocal - Ejercicios para Afinar la Voz - Mejora Tu Voz"
          description="Descubre cómo cantar mejor controlando la afinación de la voz. Afinar la voz significa cantar en el tono adecuado. A veces tenemos dificultad porque no nos damos cuenta de nuestros errores. Estos ejercicios te ayudarán a controlar tu afinación de manera sencilla y progresiva.."
          video="https://www.youtube.com/embed/G2vDNamPNoc"
        />
        <Cursos
          title="Clases de canto 1 | Como cantar Bien "
          description="una clase de canto corta con el propósito de trabajar"
          video="https://www.youtube.com/embed/UVUwP8AqD1g"
        />
        <Cursos
          title="Como cantar Raspado"
          description="Como Raspar la voz al cantar | Rasgado Clases de Canto Gutural"
          video="https://www.youtube.com/embed/0DM9yUq4Pjk"
        />
      </div>
      {/* curso 3 */}
      <Titulo title="Tocar Guitarra" />
      <div className="tab-content d-flex" id="myTabContent">
        <Cursos
          title="¡Aprende como tocar guitarra en solo 20 minutos! El mejor tutorial para principiantes"
          description="Como tocar guitarra fácil! Aprende 8 acordes básicos en 10 minutos!"
          video="https://www.youtube.com/embed/S_QIaGgLJ-0"
        />
        <Cursos
          title="Como tocar guitarra fácil! Aprende 8 acordes básicos en 10 minutos!"
          description="Como tocar guitarra fácil! Aprende 8 acordes básicos en 10 minutos!"
          video="https://www.youtube.com/embed/kdHMt6H4kDc"
        />
      </div>
      {/* curso 4 */}
      <Titulo title="Tocar piano" />
      <div className="tab-content d-flex" id="myTabContent">
        <Cursos
          title="Como Tocar El Piano / Fàcil y Ràpido / Para Principiantes"
          description="Piano facil y divertidas"
          video="https://www.youtube.com/embed/jaDOE_cYxSQ"
        />
        <Cursos
          title="partiduras"
          description="Pantera rosa"
          video="https://www.youtube.com/embed/UX55giqXlZY"
        />
        <Cursos
          title="COMO TOCAR navidad"
          description="musida de navidad"
          video="https://www.youtube.com/embed/eJELRZrrLSk"
        />
      </div>
    </div>
  );
}

export default App;
