import 'leaflet/dist/leaflet.css'
import './App.css';
import TabList from './Components/Tabs/Tabs'
import SalesForecasting from './Components/Home/ChartComponent/SalesForecasting';
import FloatingCurveBarChart from './Components/Home/ChartComponent/TopSellingProducts';
// import Dashboard from './Components/Dashboard';
// import TopSellingProductsChart from './Components/TopSellingProducts';
// import SalesGraph from './Components/saleschart';
import Home from './Components/Home/Home';
import Chrolopath from './Components/mapchart/ChrolopathMap';
import { Tab } from '@mui/material';
import Tabs from "./Components/Tabs/Tabs"
const CLint_ID =" 950892811144-cim7vvpguvknnki21j468af07dpjrffq.apps.googleusercontent.com"
const Clint_secret = "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"
function App() {
  return (
    <div className="App">
      {/* <Chrolopath/> */}
   {/*  */}
 {/* <Home/> */}

 {/* <FloatingCurveBarChart/>
 <SalesForecasting/> */}
<Tabs/>
    </div>
  );
}

export default App;
