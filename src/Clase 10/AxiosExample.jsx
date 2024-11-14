import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosExample = () => {
  const [cat, setCat] = useState({});
  const url = "https://api.thecatapi.com/v1/images/search";

  useEffect(() => {
    // axios(url)
    //   .then((res) => {
    //     console.log(res.data[0]);
    //     setCat(res.data[0]);
    //   })
    //   .catch((err) => console.log(err));

    const getData = async () => {
      try {
        const res = await axios(url);
        setCat(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  console.log(cat);
  return (
    <div>
      <img src={cat.url} alt="" />
    </div>
  );
};

export default AxiosExample;
