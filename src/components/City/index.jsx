import React from "react";
import './styles.css'
import { Link } from "react-router-dom";
const City = ({id, name, country, imageUrl}) => {
    return <div className="card text-bg-dark card-city mb-3" >
  <img src={imageUrl} className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h5 className="card-title">{name}</h5>
    <h6 className="badge text-bg-primary mb-2">{country}</h6>
    <button className="btn-card"><Link to={`/cities/${id}`} className="link-card">View More</Link></button>
  </div>
</div>
};
export default City;
