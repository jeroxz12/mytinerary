import React, { useEffect, useState } from "react";
import axios from "axios";
import City from "../City";
import { useDispatch, useSelector } from "react-redux";
import { setCities } from "../../redux/store/slices/citySlice";
const CitiesList = () => {

  let [citiesState, setCitiesState] = useState([]);

  const dispatch = useDispatch();
   const  cities  = useSelector( store => store.cities.data);
  
  

  return <>{ cities ? <div className="container">
    <div className="row d-flex flex-lg-row  justify-content-around mb-3">
      { cities.map((citie, i) => {
        return <City key={i}  id={citie._id} name = {citie.name} imageUrl = {citie.imageUrl} country = {citie.countryName} />
      })} 
    </div>
  </div> : <p>No hay elementos</p>}</>
};
export default CitiesList;
