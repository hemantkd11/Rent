import React from "react";
import Chart from "react-apexcharts";

const SalesByChannel = ()=>{
    const chartOptions = {
        chart: {
          type: 'bar',
          
          animations: {
            enabled: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal:true,
            borderRadius: 8
          },
        },
        dataLabels: {
          enabled: true,
        //   offsetX : -6 ,
          style:{
            fontSize:"12px",
            colors:['#fff']
          }
        },
        stroke: {
          show:'ture',
          width:1,
          colors:['#fff'],
          radius:"10px"
        },
        xaxis: {
          categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
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
          show: false,
        },
        tooltip: {
          enabled: true,
        },
      };
    
      const chartData = [
        {
          name: 'Series 1',
          data: [44, 55, 41, 67, 22],
        },
        {
          name: 'Series 2',
          data: [13, 23, 20, 8, 13],
        },
        {
          name: 'Series 3',
          data: [11, 17, 15, 15, 21],
        },
      ];

      return (
        <Chart
        options={chartOptions}
        series={chartData}
        type="bar"
        height={300}
      />
      )
}

export default SalesByChannel