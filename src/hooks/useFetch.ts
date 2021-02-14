import { useEffect, useState } from "react";

/**
 * Simple reusable hook for fetching data. Returns the loading state, error, and the fetched data.
 *
 *
 *
 */

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<null | T>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const req = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    req();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
