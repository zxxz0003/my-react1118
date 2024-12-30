import { useEffect,useState } from "react"
import axios from 'axios';
import { CiUmbrella } from "react-icons/ci";
import './App.css'
import ShowCity from "./showCity";
function App() {

  const[weatherList,setWeatherList]=useState([]);
  useEffect(()=>{
 (async()=>{
   const data =await axios.get('https://zxxz0003.github.io/my-react1118/json/F-C0032-001.json');
   const{location}=data.data.cwaopendata.dataset;
  // console.log(locaton);
  setWeatherList(location);

   //locationName =>縣市名稱
   //elementName => WX =>天氣概況
   //elementName=> PoP =>降雨機率
 })()
   },[]) 

  return (
    
      <div className="wrap">
        <h2>36小時</h2>
        <div className="container">

        {
            weatherList.map((city)=>{
              return (
                <div className="item" key={city.locationName}>
          <h3>{city.locationName}</h3>
                <ShowCity city={city} />
                </div>
              )
        })
      }
        
        </div>
       

      </div>


    
  )
}

export default App