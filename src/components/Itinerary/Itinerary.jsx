import React from 'react'
import './styles.css'

const Itinerary = ({ itinerary }) => {
console.log(itinerary);


  return (
    <div className="card card-itinerary mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={itinerary.activities[0]} className="img-fluid rounded-start img-itinerary" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body card-body-itinerary">      
        <p className="card-title itinerary-card-author ">{itinerary.author}</p>
        <p className="card-title itinerary-card-title ">{itinerary.name}</p>
        <p className="card-text  card-text-itinerary">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text  card-text-itinerary">Precio: ${itinerary.price}</p>
        <p className="card-text  card-text-itinerary ">Duration: {(itinerary.duration * 1000) / 60000} hours</p>
        <p className="card-text  card-text-itinerary">Language: {itinerary.language}</p>
        <p className="card-text  card-text-itinerary">Extras:</p>
        <ul>
           {itinerary.extras.map( (extra,id) => {
            return <li key={id}>{extra}</li>
           })}
        </ul>
        <div>{itinerary.hashtags.map( (hashtag) => {
            return <p className="badge text-bg-secondary m-2">#{hashtag}</p>
        })}</div>
      </div>
    </div>
  </div>
</div>
)}

export default Itinerary