import { useEffect, useState } from "react";
// import AbortController from "abort-controller";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const abortCont = new AbortController();
    const fetchData = () => {
      return (
        fetch(url)
          // , { signal: abortCont.signal }
          // )
          .then((res) => {
            if (!res.ok) {
              throw Error("Could not fetch the data for that resource");
            }
            return res.json();
          })
          .then((data) => {
            setData(data);
            setIsPending(false);
            setError(null);
          })
          .catch((err) => {
            if (err.name === "AbortError") {
              console.log("Fetch Aborted");
            } else {
              setIsPending(false);
              setError(err.message);
            }
          })
      );
    };

    fetchData();

    // return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
