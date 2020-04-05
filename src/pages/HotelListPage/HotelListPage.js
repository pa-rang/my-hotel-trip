import React from 'react';

import usePromise from '../../hooks/usePromise';
import HotelList from '../../components/HotelList';

const BASE_URL = "https://x0ofq07ykl.execute-api.ap-northeast-2.amazonaws.com/dev";

const getHotelList = () => {
  const response = fetch(`${BASE_URL}/hotels`);
  return response;
};



const HotelListPage = () => {
  const { data, loading, error } = usePromise(getHotelList, []);
  console.log(data, loading, error);

  return (
    <div>
      <h1>HotelListPage</h1>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
      <div>{Array.isArray(data) ? data.map(hotel => (
        <HotelList
          key={hotel.id}
          id={hotel.id}
          name={hotel.name}
          freeServices={hotel.freeServices}
          imageUrl={hotel.imageUrl}
          reviewScore={hotel.reviewScore}
          totalReviewCount={hotel.totalReviewCount}
        />
      )) : "Data is not Array"}</div>
    </div>
  );
};

export default HotelListPage;
