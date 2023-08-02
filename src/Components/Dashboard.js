import { Chart as ChartJs, ArcElement, Tooltip, Legend, } from "chart.js";
import { CategoryScale } from "chart.js";
import { useState,useEffect } from "react";
import  Data  from "../Data";
import PieChart from "./PieChart";
import { Bar, Pie } from "react-chartjs-2";
ChartJs.register(CategoryScale,ArcElement, Tooltip, Legend);

const Dashboard = () => {
const [data,setData] =useState(Data)
console.log(data)
  const datade = {
    // labels: ['Fred','Rich','John','Paul','Jason','Hoolio','Kevin'],

   
    labels: Data?.map((data)=>data.year),
    datasets: [
      {
        label: ["Users Gained"],
        data: Data?.map((data)=>data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "&quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  };
  const options = {};
  return (
    <>
      <div style={{
        width:'200px'
      }}>
        <Pie data={datade} options={options} />
      </div>
    </>
  );
};

export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import { Bar ,Pie } from 'react-chartjs-2';
// import { Chart as ChartJs,ArcElement,Tooltip,Legend } from 'chart.js';
// import { CategoryScale } from 'chart.js/auto';
// ChartJs.register(ArcElement,Tooltip,Legend);
// const Dashboard = () => {

//     const data = {
//         labels:['one','two','three'],
//         datasets:[
//             {
//                 data:[3,6,9],
//                 backgroundColor:['aqua','red','purple']
//             }
//         ]
//     }
//     const options = {

//     }
//     // const [data, setData] = useState([]);

//     //     useEffect(() => {
//     //       fetch('https://example.com/api/data')
//     //         .then(response => response.json())
//     //         .then(data => setData(data));
//     //     }, []);

//         // const chartData = {
//         //     labels: data.map(item => item.label),
//         //     datasets: [
//         //       {
//         //         label: 'My Pie Chart',
//         //         data: data.map(item => item.value),
//         //         backgroundColor: [
//         //           'rgba(255, 99, 132, 0.2)',
//         //           'rgba(54, 162, 235, 0.2)',
//         //           'rgba(255, 206, 86, 0.2)',
//         //           'rgba(75, 192, 192, 0.2)',
//         //           'rgba(153, 102, 255, 0.2)',
//         //         ],
//         //         borderColor: [
//         //           'rgba(255, 99, 132, 1)',
//         //           'rgba(54, 162, 235, 1)',
//         //           'rgba(255, 206, 86, 1)',
//         //           'rgba(75, 192, 192, 1)',
//         //           'rgba(153, 102, 255, 1)',
//         //         ],
//         //         borderWidth: 1,
//         //       },
//         //     ],
//         //   };

//         //   const chartOptions = {
//         //     plugins: {
//         //       title: {
//         //         display: true,
//         //         text: 'My Pie Chart',
//         //       },
//         //     },
//         //   };

//           return (
//             <div style={{width:'200px'}}>
//               <Pie data={data} options={options} />
//             </div>
//         );

//   };

//   export default Dashboard;
