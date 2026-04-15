import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (abortSignal) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(url, {
        signal: abortSignal,
        ...options, // Headers, method, body, etc.
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
        setData(null);
      }
    } finally {
      setLoading(false);
    }
  }, [url, JSON.stringify(options)]); // Include options in deps

  useEffect(() => {
    const abortController = new AbortController();
    
    fetchData(abortController.signal);

    return () => {
      abortController.abort(); // Cleanup on unmount/re-run
    };
  }, [fetchData]); // Stable callback

  const refetch = useCallback(() => {
    fetchData(new AbortController().signal);
  }, [fetchData]);

  return { data, loading, error, refetch };
};
