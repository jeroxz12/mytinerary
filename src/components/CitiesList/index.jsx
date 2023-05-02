import React, { useEffect, useState } from "react";
import axios from "axios";
import City from "../City";

const CitiesList = () => {


  let [cities, setCities] = useState([]);

  useEffect( () => {
      axios.get('http://localhost:3001/api/cities/all').then((response) => setCities(response.data.cities));
  }, []);
  console.log(cities);

  return <div>
      
    </div>;
};

export default CitiesList;
