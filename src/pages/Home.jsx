import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios.get("https://zenquotes.io/api/random")
      .then((response) => setQuote(response.data[0].q))
      .catch(() => setQuote("Stay positive and keep pushing forward!"));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Good Morning, User!</h1>
      <p className="italic text-gray-700">"{quote}"</p>
    </div>
  );
};

export default Home;
