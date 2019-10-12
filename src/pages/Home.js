import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="gooooo Giftss"
          subtitle="THE PERFECT GIFT EVERY TIME"
        >
          <Link to="/rooms" className="btn-primary">
            FOR HIM
          </Link>
          <Link to="/rooms" className="btn-primary1">
            FOR HER 
          </Link>
        </Banner>
      </Hero>
      {/* <Services /> */}
      {/* <FeaturedRooms /> */}
    </>
  );
};

export default home;
