import React, { useState, useEffect } from 'react';
import { Chart as ChartJs } from "chart.js";
import { 
    ArcElement,
    CategoryScale,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,} from "chart.js";
import { Line } from 'react-chartjs-2';
ChartJs.register(CategoryScale,ArcElement, Tooltip, Legend);
const SalesGraph = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Sales',
        data: [],
        fill: false,
        borderColor: '#007bff',
        tension: 0.1,
      },
    ],
  });

  const options = {}
  useEffect(() => {
    const interval = setInterval(() => {
      // Replace this with your code to fetch real sales data from a server
      const salesData = Math.floor(Math.random() * 100);

      setData((prevState) => ({
        ...prevState,
        labels: [...prevState.labels, new Date().toLocaleTimeString()],
        datasets: [
          {
            ...prevState.datasets[0],
            data: [...prevState.datasets[0].data, salesData],
          },
        ],
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Line data={data} options={options}/>
    </div>
  );
};

export default SalesGraph;