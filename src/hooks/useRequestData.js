import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { useEffect, useState } from "react"

const useRequestData = (initialData, path) => {
  const [data, setData] = useState(initialData)

  const headers = {
    headers: {
      auth: localStorage.getItem("token"),
    }
  }


  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .get(`${BASE_URL}${path}`, headers)
        .then(({ data }) => {
          setData(data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [path])

  return { data }
}

export default useRequestData
