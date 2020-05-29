import React from 'react';

import HotelItem from 'components/HotelItem'

function HotelList({ loading, error, handleRetry, hotelList}) {

  return (
    <>
      {(!error && !loading) && <button onClick={handleRetry}>새로고침</button>}
      <div>{loading && "Loading..."}</div>
      {error
        ? <button onClick={handleRetry}>다시 불러오기</button> 
        : hotelList.map(hotel => (
          <HotelItem
            key={hotel.id}
            id={hotel.id}
            name={hotel.name}
            freeServices={hotel.freeServices}
            imageUrl={hotel.imageUrl}
            rate={hotel.rate}
            reviewScore={hotel.reviewScore}
            totalReviewCount={hotel.totalReviewCount}
          />
      ))}
    </>
  );
};

export default HotelList;