import {
  CartesianGrid,
  Line,
  Legend,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Data = [
  { name: "mon", sales: 344, loss: 133, profit: 335 },
  { name: "tues", sales: 122, loss: 43, profit: 475 },
  { name: "wed", sales: 565, loss: 456, profit: 567 },
  { name: "thur", sales: 343, loss: 50, profit: 222 },
  { name: "fri", sales: 788, loss: 333, profit: 666 },
];

export const RealTimeSales = () => {
  return (
    <div className="real-time-sales-data">
      <LineChart width={500} height={300} data={Data}>
        <Line type="monotone" dataKey="sales" stroke="#2196F3" />
        <Line type="monotone" dataKey="loss" stroke="#e71b14" />
        <Line type="monotone" dataKey="profit" stroke="#50e714" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
      <h3>Real Time Sales Data</h3>
    </div>
  );
};


