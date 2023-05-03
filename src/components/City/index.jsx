//import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


// const City = (props) => {

const City = ({pepito}) => {
  
  // let [data, setData]  = useState([]) 

  // useEffect(()=>{
  //   // setData(cities)
  //    console.log(pepito)
  // }, [])

    return (
      <>
        {
          pepito.map(city => {
            return (
              <div className="card card-list" key={city._id} >
                <h1>{city.name}</h1>
                <p>{city.countryName}</p>
                <img src={city.imageUrl} alt="" />
                <Link to={`/city/${city._id}`} >
                  <button className="btn btn-success">
                    ver mas...
                  </button>
                </Link>
              </div>
            )
          })
        }
     </>)
};

export default City;


 /*
            {cities.map(city => {
          return (
            <div className="card">
              <h1>{city.name}</h1>
              <p>{city.countryName}</p>
              <img src={city.imageUrl} alt="" />
            </div>
          )
        })}
     
     */ 