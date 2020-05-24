import React from 'react';

import usePromise from 'hooks/usePromise';
import HotelList from 'components/HotelList';
import HotelFilter from 'components/HotelFilter';
import RecentView from 'components/RecentView';

const BASE_URL = "https://x0ofq07ykl.execute-api.ap-northeast-2.amazonaws.com/dev";
const page = 3;
const filter_condition = null;

const getHotelList = () => {
  const response = fetch(`${BASE_URL}/hotels?page=${page}&filters=${filter_condition}`);
  return response;
};

function HotelListPage() {
  const { data, loading, error, handleRetry } = usePromise(getHotelList);
  console.log(data, loading, error);

  return (
    <>
      <h1>HotelListPage</h1>
      <HotelFilter />
      <RecentView />
      <HotelList 
        loading={loading}
        error={error}
        handleRetry={handleRetry}
        data={data}
      />
    </>
  );
};

export default HotelListPage;
