import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
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
      <>

    <button className='btn btn-primary btn-sm align-self-start btn-back'><Link to={'/cities'} className='text-white text-decoration-none'>{"<- Volver"}</Link></button>
    <div className="details_hero" id="details_hero" style={{  background: 'url(' + city.imageUrl + ')' }}>

      <div className="details_hero_content">

        <h2 className="details_hero_title">Welcome to {city.name}</h2>
        <Link to={"https://www.google.com/maps/place/" + city.name} target='_blank' className="details_hero_button animate__animated animate__flash">
            Explore in Maps
        </Link>
      </div>
    </div>
    </>
    )
}
export default CityDetail