import React, { useEffect, useState } from "react";
import axios from "axios";
import City from "../City";

const CitiesList = () => {
  const getData = () => {
    return axios.get('http://localhost:3001/api/cities/all').then((response) => setCities(response.data.cities));
  }
  let [cities, setCities] = useState([]);
  useEffect( () => {
      getData();
  }, []);
  return <div className="container">
    <div className="row d-flex flex-lg-row  justify-content-around mb-3">
     { cities.map((citie, i) => {
        return <City key={i}  id={citie._id} name = {citie.name} imageUrl = {citie.imageUrl} country = {citie.countryName} />
      })}
    </div>
  </div> ;
};
export default CitiesList;
