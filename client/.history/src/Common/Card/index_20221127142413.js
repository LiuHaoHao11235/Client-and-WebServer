import axios from "axios";
import { useEffect, useState } from "react";
const Card = () => {};
const useUser = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/commodity`)
      .then((res) => console.log(res.data))
      .catch(() =>
        dispatch({
          type: "LOAD_COMMODITY_FAILURE",
        })
      );
  }),
    [];
};
