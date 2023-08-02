import React from 'react'
import Chart from "react-apexcharts";
const SalesForecasting = () => {
    const chartOptions = {
        chart: {
          type: 'line',
          height:350,
          width:'aauto',
          zome: {
            enabled: false,
          },
          toolbar: {
            show: false, // Hide the toolbar and zoom icon
          },
        },
        dataLabels: {
          enabled: false,
          offsetX : -6 ,
          style:{
            fontSize:"12px",
            colors:["black"]

          }
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          categories: ['Jan', 'feb', 'mar', 'apl', 'may','june','july','aug','sep','oct','nov','dec' ],
          labels: {
            show: true,
          },
        },
        // yaxis: {
        //     categories:['20k' ,'25k','30k','40k','50k','100k'],
        //   labels: {
        //     show: true,
        //   },
        // },
        fill: {
          opacity: 1,
        },
        grid: {
          row: {
            color:["red",'green','yellow']
          },
        },
        tooltip: {
          enabled: true,
        },
      };
      const chartData = [
        {
          name: 'Totel Sale',
          data: [44, 55, 41, 67, 22,,23,44,55,22,11,22,33],
        },
        {
          name: 'Total profit',
          data: [13, 23, 20, 8, 13],
        },
        {
          name: 'Total loss',
          data: [11, 17, 15, 15, 21],
        },
      ];
  return (
    <div>
            <Chart
        options={chartOptions}
        series={chartData}
        type="line"
        height={300}
      />
    </div>
  )
}

export default SalesForecasting
