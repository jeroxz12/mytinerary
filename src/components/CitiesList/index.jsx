import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css"
import City from "../City";
//import City from "../City";

const baseURL = 'http://localhost:3001/api/cities/all';

const CitiesList = () => {

  const [cities, setCities] = useState(null);

  useEffect(() => {
      axios.get(baseURL).then((response) =>
       setCities(response.data.cities)
       );
  }, []);

  if (!cities) return null;
   
  return ( 
    <div className="lista">
      <City pepito={cities} />
    </div>
  )

};

export default CitiesList;
