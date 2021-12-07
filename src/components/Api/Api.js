import { useState, useCallback } from "react";
const Api = () => {
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const request = useCallback(async (url, options) => {
    let response, json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
    } catch (erro) {
      json = null;
      setError("erro");
    } finally {
      setBook(json.items);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { book, error, loading, request };
};

export default Api;
