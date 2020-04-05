import { useState, useEffect } from 'react';

const usePromise = (promiseCreator, deps) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await promiseCreator();
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log("Error: ", error);
      setError(true);
    }
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, deps);

  return { data, loading, error };
}

export default usePromise;