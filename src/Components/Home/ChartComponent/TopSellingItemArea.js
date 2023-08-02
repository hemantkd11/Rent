
import React from "react";
import Chart from "react-apexcharts";

const TopSellingItemsAreaWise = () => {
  const chartOptions = {
    chart: {
        stacked:true,
      type: "bar",
      height: 350,
      width: "auto",
      toolbar: {
        show: false, // Hide the toolbar and zoom icon
      },
    },
    dataLabels: {
      enabled: false,
      offsetX: -6,
      style: {
        fontSize: "12px",
        color: ["black"],
      },
    },
    plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            total: {
              enabled: true,
              offsetX: 0,
              style: {
                fontSize: '10px',
                fontWeight: 900
              }
            }
          }
        },
      },
    stroke: {
     width:1,
     colors:['$fff']
    },
    title:{
text:'Top Selling Item In Areas'
    },
    xaxis: {
      categories: [
       'Bangalore','Delhi','Goa','Mumbai','Ahmedabad'
      ],
      labels: {
        show: true,
      },
    },
    yaxis: {
       
      labels: {
        show: true,
      },
    },
    fill: {
      opacity: 1,
    },
    grid: {
      row: {
        color: ["red", "green", "yellow"],
      },
    },
    tooltip: {
      enabled: true,
    },
  };
  const chartData = [
    {
      name: "Non-Veg",
      data: [44, 55, 41, 67, 22],
    },
    {
      name: "Vegan",
      data: [13, 23, 20, 8, 13],
    },
    {
      name: "Veg",
      data: [44, 17, 15, 15, 21],
    },
  ];
  return (
    <>
      <Chart
        options={chartOptions}
        series={chartData}
        type="bar"
        height={300}
      />
    </>
  );
};


export default TopSellingItemsAreaWise