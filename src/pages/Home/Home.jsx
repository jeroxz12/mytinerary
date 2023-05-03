import React from "react";
import Hero from "../../components/Hero";
import CallToAction from "../../components/CallToAction";
import Carrousel from "../../components/Carrousel";

const Home = () => {
  return (
    <>
      <Hero
        title="MyTinerary"
        subtitle="Find your perfect trip, designed by insiders who know and love their cities!"
      />
      <div className="container mb-5" id="cardContainer">
        <CallToAction
          title="Explore our cities"
          desc="Discover the best of each destination, find the most popular attractions, delicious restaurants, and interesting places to visit. Explore our cities and live unique experiences!"
          cardId={1}
          link="/cities"
        />
        <CallToAction
          title="Find the perfect hotel"
          desc="Need a place to stay on your next trip? Find the perfect hotel for you, with comfortable rooms, excellent services, and an ideal location. Discover our accommodation options and book your room right now."
          cardId={2}
          link="/hotels"
        />
      </div>
      <div className="container mt-5 mb-5">
        <Carrousel />
      </div>
    </>
  );
};

export default Home;
