import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
Chart.register(CategoryScale,LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const labels = ['mon','tues','wed','thus','fri','sat','sun']
const options ={}

export const Data = {
   
    datasets:[
        {
            
            data:[32,55,55,65,43,34,32],
            backgroundColor:'#2196F3',
            borderColor:'#2196f3',
            label:'mon',
        },
        {
            label:'tuesday',
            data:[4,5,3,2,33,66,6],
            backgroundColor:'pink',
            borderColor:'pink',
        },
        {
            label:'wednesday',
            data:[55,3,2,2,6,7,9],
            backgroundColor:'yellow',
            borderColor:'yellow',
        },
        {
            label:'thusday',
            data:[23,34,45,67,23,12,34],
            backgroundColor:'green',
            borderColor:'green',
        },
        {
            label:'friday',
            data:[12,34,56,44,8,33,4],
            backgroundColor:'blue',
            borderColor:'blue',
        },
        {
            label:'saturday',
            data:[32,55,55,65,43,34,32],
            backgroundColor:'red',
            borderColor:'red',
        },
        {
            label:'sunday',
            data:[32,55,55,65,43,34,32],
            backgroundColor:'orange',
            borderColor:'orange',
        },

    ],
    labels,
}
const SalesForecast = () => {
      
  return (
    <div className="sales-forecasting">
      <Line options={options} data={Data}/>
    </div>
  );
};


export default SalesForecast