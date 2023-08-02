import { plugins } from "chart.js";
import React from "react";
import { Bar, Pie } from "react-chartjs-2";
const PieChart = ({ Data ,option }) => {
  return (
    <div className="chart-container">
      <h3>Pie Chart</h3>
      <Pie
        data={Data}
        options={option}
      />
    </div>
  );
};

export default PieChart;
