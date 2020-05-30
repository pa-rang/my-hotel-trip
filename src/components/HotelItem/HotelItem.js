import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from 'icons/default-image.png';
import { HotelItemWrapper } from './HotelItem.styled';

const HotelItem = ({ name, freeServices, imageUrl, rate, reviewScore, totalReviewCount }) => {
  // lazy Loading
  // const lazyLoadRef = useRef();
  // const lazyLoadOption = { root: null, threshold: 0.5 };
  // const lazyLoadhandler = (entries, observer) => {
  //   const { target } = entries[0];
  //   if (entries[0].isIntersecting) {
  //     target.src = target.dataset.src;
  //     lazyLoadObserver.unobserve(target);
  //   }
  // };
  // const lazyLoadObserver = new IntersectionObserver(lazyLoadhandler, lazyLoadOption);
  
  // useEffect(() => {
  //   lazyLoadObserver.observe(lazyLoadRef.current);
  // }, [])

  return(
    <HotelItemWrapper>
      <div>{name}</div>
      <div>{freeServices}</div>
      {/* <img ref={lazyLoadRef} src={defaultImage} data-src={imageUrl} alt={name} title={name} style={{ width: "200px", height: "200px" }} /> */}
      <img src={defaultImage} data-src={imageUrl} alt={name} title={name} style={{ width: "200px", height: "200px" }} />
      <div>{rate}</div>
      <div>{reviewScore}</div>
      <div>{totalReviewCount}</div>
    </HotelItemWrapper>
  );
};

// Type checking with propTypes
HotelItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  freeServices: PropTypes.array.isRequired,
  imageUrl: PropTypes.string.isRequired,
  reviewScore: PropTypes.number.isRequired,
  totalReviewCount: PropTypes.number.isRequired
}

export default HotelItem;
