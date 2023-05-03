import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'animate.css';
import './styles.css'
const CityDetail = () => {

  let { id } = useParams();
  let [city, setCity] = useState({});
  
  useEffect( () => {
    axios.get('http://localhost:3001/api/cities?id=' + id).then((response) => setCity(response.data.city));
  },[])
console.log(city)
    return (
    <div className="details_hero" id="details_hero" style={{  background: 'url(' + city.imageUrl + ')' }}>
      <div className="details_hero_content">
        <h2 className="details_hero_title">Welcome to {city.name}</h2>
        <a href="#cardContainer" className="details_hero_button animate__animated animate__flash">
            Explore ↓
        </a>
      </div>
    </div>
    )
}
export default CityDetail