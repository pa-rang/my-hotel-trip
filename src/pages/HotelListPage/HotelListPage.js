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

const HotelListPage = () => {
  const { data, loading, error, handleRetry } = usePromise(getHotelList);
  console.log(data, loading, error);

  return (
    <div>
      <h1>HotelListPage</h1>
      
      <HotelFilter />
      <RecentView />
      <HotelList
        error={error}
        loading={loading}
        handleRetry={handleRetry}
        data={data}
      />

      {/* {(!error && !loading) && <button onClick={handleRetry}>새로고침</button>}
      <div>{loading && "Loading..."}</div>
      <div className="scroll-container">
        <div>{!error ? data.map(hotel => (
          <HotelList
            key={hotel.id}
            id={hotel.id}
            name={hotel.name}
            freeServices={hotel.freeServices}
            imageUrl={hotel.imageUrl}
            rate={hotel.rate}
            reviewScore={hotel.reviewScore}
            totalReviewCount={hotel.totalReviewCount}
          />
        )) : <button onClick={handleRetry}>다시 불러오기</button>}</div>
      </div> */}
    </div>
  );
};

export default HotelListPage;
