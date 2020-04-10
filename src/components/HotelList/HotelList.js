import React from 'react';
import PropTypes from 'prop-types';

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

// Type checking with propTypes
HotelList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  freeServices: PropTypes.array.isRequired,
  imageUrl: PropTypes.string.isRequired,
  reviewScore: PropTypes.number.isRequired,
  totalReviewCount: PropTypes.number.isRequired
}

export default HotelList;