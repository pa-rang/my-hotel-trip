import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// const lazyRef = useRef(null);
// const lazyObserver = new IntersectionObserver((entries, observer) => {
//     if (entries[0].intersectionRatio > 0) {
//         const target = entries[0].target;
//         target.src = target.dataset.src;
//         observer.unobserve(target);
//     }
// })
// useEffect(() => {
//     if (lazyRef.current) {
//         lazyObserver.observe(lazyRef.current);
//     }
// }, [])

const HotelList = ({ id, name, freeServices, imageUrl, rate, reviewScore, totalReviewCount }) => {


  // Lazy Loading
  const images = document.querySelectorAll('.image');
  const lazyLoadOption = { root: null, threshold: 0.5 };
  const lazyLoadImage = (entries, observer) => {
    entries.forEach(entry => {
      const { target } = entry;
      if (entry.isIntersecting) {
        console.log("target", target);
        target.src = target.dataset.src;
        lazyLoadingIO.unobserve(target)
      }
    })
  };
  const lazyLoadingIO = new IntersectionObserver(lazyLoadImage, lazyLoadOption);
  images.forEach(image => lazyLoadingIO.observe(image));

  return (
    <div style={{ border: "1px solid #363636", margin: "24px", width: "480px" }}>
      <div>{name}</div>
      <div>{freeServices}</div>
      <img className="image" data-src={imageUrl} alt={name} title={name} style={{ width: "200px", backgroundColor: "f8f8f8" }}/>
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