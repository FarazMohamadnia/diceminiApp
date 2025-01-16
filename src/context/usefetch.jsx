import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch data from a given URL.
 * @param {string} url - The URL to fetch data from.
 * @returns {Object} An object containing data, error, and loading states.
 */
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // A flag to track if the component is still mounted
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup function to prevent state updates on unmounted component
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
