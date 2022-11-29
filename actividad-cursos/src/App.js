import "./App.css";
import React from "react";

function Video(props) {
  const { video } = props
  return (
    <button
    type="button"
    class="list-group-item list-group-item-action fs-5"
    >
      <img
        className="img-fluid icon-list me-3"

        alt=""
      ></img>
      {video}
    </button>
  )
}

function Videos(props) {
  const {videos} = props
  const lista =  videos.map( (video) => {
    return <Video video={video} />
  } 
)
return (
  <div>
    {lista}
  </div>
  )
}

function Cursos(props) {
  const { title, description, imagen, videos, idElement, idTarget} = props;
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
        <h2 className="mt-2 mb-4">Videos</h2>
        <div class="list-group">
        <Videos
          videos={videos}
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
    <div className="App mt-5">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active fw-bold fs-5"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            fundamentos de musica
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          <div className="card w-25 mt-2 ms-2">
            <div className="card-body">
              <h5 className="card-title">introduccion</h5>
              <iframe
                width="300"
                height="250"
                src="https://www.youtube.com/embed/3m2k16uKbwM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <h5>Descripcion:</h5>
            <p>En esta clase aprenderas conseptos basicos de musica.</p>
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
