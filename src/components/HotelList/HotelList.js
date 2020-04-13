import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../icons/default-image.png';

const HotelList = ({ id, name, freeServices, imageUrl, rate, reviewScore, totalReviewCount }) => {

  // lazy Loading
  const lazyLoadRef = useRef();
  const lazyLoadOption = { root: null, threshold: 0.5 };
  const lazyLoadhandler = (entries, observer) => {
    const { target } = entries[0];
    if (entries[0].isIntersecting) {
      target.src = target.dataset.src;
      lazyLoadObserver.unobserve(target);
    }
  };
  const lazyLoadObserver = new IntersectionObserver(lazyLoadhandler, lazyLoadOption);
  useEffect(() => {
    lazyLoadObserver.observe(lazyLoadRef.current);
  }, [])

  return (
    <div style={{ border: "1px solid #363636", margin: "24px", width: "480px" }}>
      <div>{name}</div>
      <div>{freeServices}</div>
      <img ref={lazyLoadRef} src={defaultImage} data-src={imageUrl} alt={name} title={name} style={{ width: "200px", height: "200px" }} />
      <div>{rate}</div>
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