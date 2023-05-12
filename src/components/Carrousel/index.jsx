import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import { Link } from "react-router-dom";

const baseURL = "http://localhost:3001/api/cities/all";

const Carrousel = () => {
  let [cities, setCities] = useState(null);
  let [indice, setIndice] = useState(0);

  useEffect(() => {
    axios.get(baseURL).then((response) => setCities(response.data.cities));
  }, []);

  if (!cities) return null;
  //console.log(cities);
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner ">
        <div className="carousel-item active ">
          <div className="card bg-dark text-white">
            <img
              className="card-img"
              src={cities[indice].imageUrl}
              alt="Card image"
            />
            <div className="card-img-overlay  ">
              <h5 className="carousel_title">{cities[indice].name}</h5>
              <p className="carousel_text">{cities[indice].countryName}</p>
            </div>
          </div>
        </div>
      </div>
      <Link
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
        onClick={() => setIndice(indice > 0 ? indice - 1 : cities.length - 1)}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </Link>
      <Link
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
        onClick={() => setIndice(indice < 11 ? indice + 1 : 0)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </Link>
    </div>
  );
};

export default Carrousel;
