import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";

//This componant adds class and Link for each gift
const Gift = memo(({ gift }) => {
  const { name, type, slug, images, price } = gift;

  return (
    <article className="room">
      <div className="img-container">
        <Link to={`/${type}/${slug}`}>
          <img src={images[0] || defaultImg} alt="single room" />
        </Link>
      </div>
    </article>
  );
});

Gift.propTypes = {
  room: PropTypes.shape({
    // name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Gift;
