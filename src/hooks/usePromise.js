import { useState, useEffect } from 'react';

const usePromise = (promiseCreator, deps) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await promiseCreator();
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, deps);

  return [data, loading, error];
}

export default usePromise;