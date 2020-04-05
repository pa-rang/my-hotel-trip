import React, { useState, useEffect } from 'react';
import usePromise from '../../hooks/usePromise';

const BASE_URL = "https://x0ofq07ykl.execute-api.ap-northeast-2.amazonaws.com/dev";

const getHotelList = () => {
  const response = fetch(`${BASE_URL}/hotels`);
  // const hotelData = response.json();
  return response;
}

const HotelListPage = () => {
  const promise = usePromise(getHotelList, []);
  console.log(promise);
  return (
    <div>
      <h1>HotelListPage</h1>
    </div>
  );
};

export default HotelListPage;
