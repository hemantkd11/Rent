
// import React from 'react';
// import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

// const data = [
//   { product: 'Product A', sales: '10%' },
//   { product: 'Product B', sales: '20%' },
//   { product: 'Product C', sales: '50%' },
//   { product: 'Product D', sales:  "75%" },
//   { product: 'Product E', sales: '100%' },
// ];

// const TopSellingProductsChart = () => {
//   return (
//     <VictoryChart
//       theme={VictoryTheme.material}
//       domainPadding={20}
//     >
//       <VictoryAxis
//         tickFormat={data.map(d => d.product)}
//       />
//       <VictoryAxis
//         dependentAxis
//       />
//       <VictoryBar
//         data={data}
//         x='product'
//         y='sales'
//       />
//     </VictoryChart>
//   );
// };

// export default TopSellingProductsChart;


import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory';

const data = [
  { product: 'Product A', sales: 100 },
  { product: 'Product B', sales: 200 },
  { product: 'Product C', sales: 300 },
  { product: 'Product D', sales: 400 },
  { product: 'Product E', sales: 500 },
];

const totalSales = data.reduce((total, d) => total + d.sales, 0);

const percentageData = data.map(d => ({
  product: d.product,
  salesPercentage: (d.sales / totalSales) * 100,
}));

const TopSellingProductsChart = () => {
  return (
    <div style={{width:'50%' ,height:'50vh'}}>
            <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={20}
    >
      <VictoryAxis
        tickFormat={percentageData.map(d => d.product)}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={x => `${x}%`}
      />
      <VictoryBar
        data={percentageData}
        x='product'
        y='salesPercentage'
        labelComponent={<VictoryTooltip/>}
        labels={({datum})=>`${datum.salesPercentage.toFixed(2)}%`}
      />
    </VictoryChart>
    </div>

  );
};

export default TopSellingProductsChart;