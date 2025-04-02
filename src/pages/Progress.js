import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const Progress = () => {
  const [data, setData] = useState([
    { date: "Week 1", weight: 50 },
    { date: "Week 2", weight: 52 },
    { date: "Week 3", weight: 55 },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Progress Chart</h1>
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Tooltip />
        <Line type="monotone" dataKey="weight" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Progress;
