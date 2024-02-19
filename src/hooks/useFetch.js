import { fetchDataFromApi } from "../utils/api";
import { useState, useEffect } from "react";

const useFetch = (endPoint) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetchDataFromApi(endPoint)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Oops! Something went wrong");
        console.log("Error occured => ", err);
      });
  }, [endPoint]);

    return { data, loading, error };
};

export default useFetch;
