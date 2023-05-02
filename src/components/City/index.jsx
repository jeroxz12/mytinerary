import React from "react";

const City = (key, city) => {

    return <div className="card" style={{width:'18rem'}} key="key">
          <img src={city.imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{city.name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
    </div>;
};

export default City;