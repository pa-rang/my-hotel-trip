import { useState, useEffect } from 'react';

const usePromise = (promiseCreator) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const handleRetry = () => {
    setRetryCount(retryCount+1)
    console.log(retryCount);
  }

  const getData = async () => {
    setError(false); // 초기화

    setLoading(true);
    try {
      const response = await promiseCreator();
      const json = await response.json();
      if (!Array.isArray(json)) {
        // json : {message: "error! retry please."}
        console.log("json is not array");
        setError(true);
      } else {
        setData(json);
      };
    } catch (e) {
      console.log("Error: ", e);
      setError(true);
    } finally {
      setLoading(false);
    };
  };

  useEffect(() => {
    getData();
  }, [retryCount]);

  return { data, loading, error, handleRetry };
}

export default usePromise;