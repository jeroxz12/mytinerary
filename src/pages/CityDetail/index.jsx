import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "animate.css";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filterOneCityById,
  setCities,
} from "../../redux/store/slices/citySlice";
import Itinerary from "../../components/Itinerary/Itinerary";
const CityDetail = () => {
  let { id } = useParams();
  let [cityState, setCityState] = useState({});
  const dispatch = useDispatch();
  const cities = useSelector((store) => store.cities.data);
  const city = useSelector((store) => store.cities.cityFound);

  useEffect(() => {
    // axios.get('http://localhost:3001/api/cities?id=' + id).then((response) => setCity(response.data.city));
    if (cities.length > 0) {
      dispatch(filterOneCityById(id));
    }
  }, [cities]);

  return (
    <>
      {cities.length > 0 ? (
        <>
          {" "}
          <button className="btn btn-primary btn-sm align-self-start btn-back">
            <Link to={"/cities"} className="text-white text-decoration-none">
              {"<- Volver"}
            </Link>
          </button>
          <div
            className="details_hero"
            id="details_hero"
            style={{ background: "url(" + city.imageUrl + ")"}}
          >
            <div className="details_hero_content">
              <h2 className="details_hero_title animate__animated animate__backInDown">Welcome to {city.name}</h2>
              <Link
                to={"https://www.google.com/maps/place/" + city.name}
                target="_blank"
                className="details_hero_button animate__animated animate__flash"
              >
                Explore in Maps
              </Link>
            </div>
          </div>
          <div className="container container-itinerarys d-flex flex-column justify-content-center">
           { Object.entries(city).length > 0 && city.itineraries.length > 0  ? city.itineraries.map( (itinerary, id) => {
            return <Itinerary  key={id} itinerary = {itinerary} />
          }) :<h3 className="text-white text-center">Esta ciudad no tiene itinerarios para mostrar.</h3> } 
          </div>
        </>
      ) : (
        <div className=" div-spinner">
          <div className="spinner-border " role="status">
            <span className="visually-hidden ">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};
export default CityDetail;
