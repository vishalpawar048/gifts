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
        <Banner title="Happy Gifting" subtitle="THE PERFECT GIFT EVERY TIME">
          <Link to="/forHim" className="btn-primary">
            HIM
          </Link>
          <Link to="/forHer" className="btn-primary1">
            HER
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
};

export default home;
