import { useEffect, useState } from "react"
import { getPostsPage } from "../api/axios";

const usePosts = (paramid = 1) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const { signal } = controller;

    getPostsPage(paramid, { signal })
      .then(data => {
        setResult((prev) => [...prev, ...data]);
        setHasNextPage(Boolean(data.length));
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        if (signal.aborted) return;
        setIsError(true);
        setError({ message: e.message })
      })

    return () => controller.abort()
  }, [paramid])


  return { result, loading, isError, error, hasNextPage }

}

export default usePosts;