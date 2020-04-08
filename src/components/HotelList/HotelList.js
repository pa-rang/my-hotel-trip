import React from 'react';

const HotelList = ({ id, name, freeServices, imageUrl, reviewScore, totalReviewCount }) => {
  return (
    <div style={{ border: "1px solid #363636"}}>
      <div>{name}</div>
      <div>{freeServices}</div>
      <img src={imageUrl} alt={name} title={name} style={{ width: "200px" }}/>
      <div>{reviewScore}</div>
      <div>{totalReviewCount}</div>
    </div>
  );
};

// propTypes 추가하기

export default HotelList;