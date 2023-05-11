import React, { useEffect, useState } from 'react'
import './styles.css'
import {useSelector } from 'react-redux'
const Itinerary = ({ itinerary }) => {
  
  const  cities  = useSelector( store => store.cities.data);
  let [btnState, setBtnState] = useState('Add to favorites')
    useEffect(() => {
      if(checkFavorite(itinerary._id)){
        setBtnState('Remove from favorites')
      } else {
        setBtnState('Add to favorites')
      }
    },[btnState]) 
  function checkFavorite(idParam){
    let item = JSON.parse(localStorage.getItem(idParam.toString()))
    return  item
  }

  function handleFavorite(idParam){
    if(checkFavorite(idParam)) {
      localStorage.removeItem(idParam)
      setBtnState('Add to favorites')

    } else {
      localStorage.setItem(idParam, JSON.stringify(itinerary))
      setBtnState('Remove from favorites')
    }
  }
  return (
    <div className="card card-itinerary m-3 ">
  <div className="row g-0 h-100">
    <div className="col-md-4">
      <img src={itinerary.activities[0]} className="img-fluid rounded-start img-itinerary" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body card-body-itinerary">      
        <p className="card-title itinerary-card-author ">{itinerary.author}</p>
        <p className="card-title itinerary-card-title ">{itinerary.name}</p>
        <p className="card-text  card-text-itinerary">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text  card-text-itinerary">Price: {itinerary.price > 0 ? '$ '+itinerary.price : 'Free' } </p>
        <p className="card-text  card-text-itinerary ">Duration: {(itinerary.duration * 1000) / 60000} hours</p>
        <p className="card-text  card-text-itinerary">Language: {itinerary.language}</p>
        <p className="card-text  card-text-itinerary">Extras:</p>
        <ul>
           {itinerary.extras.map( (extra, id) => {
              return <li key={ id }>{extra}</li>
           })}
        </ul>
        <div>{itinerary.hashtags.map( (hashtag) => {
            return <p className="badge text-bg-secondary m-2">#{hashtag}</p>
        })}</div>
        <button className='btn btn-primary' onClick={() => {
            handleFavorite(itinerary._id)
          }}>{  btnState  }</button>
        <button className='btn btn-success m-3' ><i className="fa-solid fa-heart"></i> {itinerary.likes}</button>
      </div>
    </div>
  </div>
</div>
)}

export default Itinerary