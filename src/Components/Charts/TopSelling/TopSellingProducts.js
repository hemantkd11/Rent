import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
  VictoryGroup,
} from "victory";

const data = [
  { product: "Product A", sales: 100 },
  { product: "Product B", sales: 200 },
  { product: "Product C", sales: 300 },
  { product: "Product D", sales: 400 },
  { product: "Product E", sales: 500 },
];

const totalSales = data.reduce((total, d) => total + d.sales, 0);

const percentageData = data.map((d) => ({
  product: d.product,
  salesPercentage: (d.sales / totalSales) * 100,
}));

const TopSellingProductsChart = () => {
  return (
    <div style={{ width: "100%", height: "50vh" }}>
      <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryAxis tickFormat={percentageData.map((d) => d.product)} />
        <VictoryAxis dependentAxis tickFormat={(x) => `${x}%`} />
        <VictoryGroup
          offset={40}
          colorScale={['#F44336', "#9C27B0", "#2196F3", "#4CAF50", "#FFC107"]}
        >
          <VictoryBar
            data={percentageData}
            x="product"
            y="salesPercentage"
            labelComponent={<VictoryTooltip />}
            labels={({ x,datum }) => `${datum.salesPercentage.toFixed(2)}% ${x}`}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
};

export default TopSellingProductsChart;
