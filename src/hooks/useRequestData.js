import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { useEffect, useState } from "react";

const useRequestData = (initialData, path) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const headers = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    setIsLoading(true);
    if (localStorage.getItem("token")) {
      axios
        .get(`${BASE_URL}${path}`, headers)
        .then(({ data }) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err.response.data.message);
          setIsLoading(false);
        });
    }
  }, [path]);

  return { data, isLoading };
};

export default useRequestData;
