import React from 'react';

import HotelItem from '../HotelItem'
import { HotelListContainer } from './HotelList.styled';

export type HotelListProps = {
  loading: boolean;
  error: boolean;
  handleRetry: any;
  hotelList?: any;
}

function HotelList({ loading, error, handleRetry, hotelList}: HotelListProps) {

  return (
    <HotelListContainer>
      {(!error && !loading) && <button onClick={handleRetry}>새로고침</button>}
      <div>{loading && "Loading..."}</div>
      {error
        ? <button onClick={handleRetry}>다시 불러오기</button> 
        : hotelList.map((hotel: any) => (
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
    </HotelListContainer>
  );
}

export default HotelList;