import React from "react";
import SingleGiftComponant from "./SingleGiftComponant";

const GiftsList = ({ gifts }) => {
  if (gifts.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {gifts.map(item => {
          return <SingleGiftComponant key={item.id} gift={item} />;
        })}
      </div>
    </section>
  );
};

export default GiftsList;
