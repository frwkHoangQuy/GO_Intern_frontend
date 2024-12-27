import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../config/baseUrl';

const useFetch = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!endpoint) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${baseURL}${endpoint}`, options);
        setData(response.data);
      } catch (err) {
        setError(err.message || 'Có lỗi xảy ra');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, options]);

  return { data, loading, error };
};

export default useFetch;
