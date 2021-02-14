import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Simple reusable hook for submitting data.
 * Returns the loading state, error, and a request function for triggering the request.
 *
 *@url the url of the endpoint
 *@setData the dispatch function where to update the data
 */

const useSubmit = <T>(
  url: string,
  setData: React.Dispatch<React.SetStateAction<T>>
) => {
  //   const [data, setData] = useState<null | T>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isMounted = useRef(true);

  // set isMounted to false when we unmount the component
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const sendRequest = useCallback(async () => {
    // don't send again while we are sending
    if (isLoading) return;
    // update state

    // send the actual request
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    }

    // once the request is sent, update state again
    if (isMounted.current)
      // only update if we are still mounted
      setIsLoading(false);
  }, [isLoading, setData, url]); // update the callback if the state changes

  return {
    sendRequest,
    isLoading,
    error,
  };
};

export default useSubmit;
