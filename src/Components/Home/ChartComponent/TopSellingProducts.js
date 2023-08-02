
// import React from "react";
// import Chart from "react-apexcharts";
// // import SalesByChannel from "./SalesByChannel";
// // import SalesForecasting from "./SalesForecasting";
// // import TopSellingItemsAreaWise from "./TopSellingItemArea";

// const FloatingCurveBarChart = () => {
//   const chartOptions = {
//     chart: {
//       type: "pie",
//     },
//     dataLabels: {
//           enabled: true,
        
//           style:{
//             fontSize:"10px",
//             colors:['#fff']
//           }
//         },
//     labels: [
//       "Category 1",
//       "Category 2",
//       "Category 3",
//       "Category 4",
//       "Category 5",
//     ],
//   };

//   const chartData = [34, 55, 43, 22, 66];

//   return (
//     <div className="chart-container">

//       <div className="chart-box">
//         <div className="main-chart-box">
//         <Chart
//           options={chartOptions}
//           series={chartData}
//           type="pie"
//           height={300}
//         />
//         </div>

//       </div>
//       <div className="chart-box">
//       <div className="main-chart-box">
//       <SalesByChannel/>
//       </div>

//       </div>
//       <div className="chart-box">
//       <div className="main-chart-box">
//       <Chart
//           options={chartOptions}
//           series={chartData}
//           type="pie"
//           height={300}
//         />
//       </div>
   
//       </div>
//       <div className="chart-box">
//         <SalesForecasting/>
//       </div>
//       <div className="chart-box">
//         <SalesByChannel/>
//       </div>
//       <div className="chart-box">
//         <TopSellingItemsAreaWise/>
//       </div>
     
//     </div>
//   );
// };

// export default FloatingCurveBarChart;
