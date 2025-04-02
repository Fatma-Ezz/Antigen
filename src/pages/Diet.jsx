import { useEffect, useState } from "react";
import axios from "axios";

const Diet = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get("https://api.edamam.com/api/food-database/v2/parser?ingr=anti-inflammatory")
      .then((response) => setFoods(response.data.hints))
      .catch(() => console.error("Error fetching foods"));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Anti-Inflammatory Foods</h1>
      <ul>{foods.map((food, index) => (<li key={index}>{food.food.label}</li>))}</ul>
    </div>
  );
};

export default Diet;
