import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(url)
        .then((data) => {
          if (!data.ok) {
            setIsLoading(false);
            throw Error("erreurr");
          }
          return data.json();
        })
        .then((data) => {
          setIsLoading(false);
          setBlogs(data);
          setError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }, 2000);
  }, [url]);

  return { blogs, isLoading, error };
};

export default useFetch;
