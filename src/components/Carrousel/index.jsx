import React, { useState } from "react";
import "./styles.css";

const items = [
  {
    id: 1,
    titulo: "Tafí del Valle",
    description: "",
    imagenUrl: "https://wallpaperaccess.com/full/2680345.jpg",
  },
  {
    id: 2,
    titulo: "Bariloche",
    description: "",
    imagenUrl: "https://wallpaperaccess.com/full/2680345.jpg",
  },
  {
    id: 3,
    titulo: "New York",
    description: "",
    imagenUrl: "https://wallpaperaccess.com/full/2680345.jpg",
  },
  {
    id: 4,
    titulo: "Bogotá",
    description: "",
    imagenUrl: "https://wallpaperaccess.com/full/2680345.jpg",
  },
  {
    id: 5,
    titulo: "Rio de Janeiro",
    description: "",
    imagenUrl: "https://wallpaperaccess.com/full/2680345.jpg",
  },
  {
    id: 6,
    titulo: "Quito",
    description: "",
    imagenUrl: "https://wallpaperaccess.com/full/2680345.jpg",
  },
  {
    id: 7,
    titulo: "Texas",
    description: "",
    imagenUrl: "https://wallpaperaccess.com/full/2680345.jpg",
  },
  {
    id: 8,
    titulo: "Miami",
    description: "",
    imagenUrl: "https://wallpaperaccess.com/full/2680345.jpg",
  },
  {
    id: 9,
    titulo: "Lisboa",
    description: "",
    imagenUrl: "https://wallpaperaccess.com/full/2680345.jpg",
  },
  {
    id: 10,
    titulo: "Bahia Blanca",
    description: "",
    imagenUrl: "https://wallpaperaccess.com/full/2680345.jpg",
  },
  {
    id: 11,
    titulo: "Buenos Aires",
    description: "",
    imagenUrl: "https://wallpaperaccess.com/full/2680345.jpg",
  },
  {
    id: 12,
    titulo: "San Juan",
    description: "",
    imagenUrl: "https://wallpaperaccess.com/full/2680345.jpg",
  },
];

const Carrousel = () => {
  const getElements = (startIndex, finishIndex) => {
    return items.slice(startIndex, finishIndex);
  };
  let [indice, setIndice] = useState(0);
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner ">
        <div className="carousel-item active ">
          {/* //   return <div className="card"  style={{width: "18rem",backgroundImage: "url("+item.imagenUrl+")",backgroundSize: "cover",
        //   objectFit: "contain",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center"}}>
        //   <div className="card-body" >
        //     <h5 className="card-title">{item.titulo}</h5>
        //     <a href="#" className="btn btn-primary btn-card">View more</a>
        //   </div>
        // </div> */}
          <div className="card bg-dark text-white">
            <img
              className="card-img"
              src={items[indice].imagenUrl}
              alt="Card image"
            />
            <div className="card-img-overlay  ">
              <h5 className="card-title">{items[indice].titulo}</h5>
              <p className="card-text">{items[indice].description}</p>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
        onClick={() => setIndice(indice > 0 ? indice - 1 : items.length - 1)}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
        onClick={() => setIndice(indice < 11 ? indice + 1 : 0)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carrousel;
