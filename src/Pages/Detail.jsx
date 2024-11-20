import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [recipe, setRecipe] = useState({});
  const params = useParams();
  console.log(params);

  const url = `https://api.spoonacular.com/recipes/${
    params.id
  }/information?apiKey=${import.meta.env.VITE_API_KEY}`;

  useEffect(() => {
    axios(url)
      .then(({ data }) => {
        console.log(data);
        setRecipe(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt="" />
      <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
      <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
    </div>
  );
};

export default Detail;
