
import { useState, useEffect } from "react";

export function useNewsData(category, searchTerm)  {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        setLoading(true);

        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apikey=e5e62c9419414b0099a3ec0b2997fde6`
        const response = await fetch(apiUrl);
        const data = await response.json();

        setNewsData(data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchNewsData();
  }, [category, searchTerm]);

  return { newsData, loading, error };
};

export default useNewsData;