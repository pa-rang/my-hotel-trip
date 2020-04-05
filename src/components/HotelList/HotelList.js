import React from 'react';

const HotelList = ({ id, name, freeServices, imageUrl, reviewScore, totalReviewCount }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{freeServices}</div>
      <img src={imageUrl} alt={name} title={name} style={{ width: "200px" }}/>
      <div>{reviewScore}</div>
      <div>{totalReviewCount}</div>
    </div>
  );
};

export default HotelList;