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
    <>
      <div className="wrap">
        <h2>36小時</h2>
        <div className="container">

        
        
        {
          weatherList.map((city)=>{
        return (
          <div className="item" key={city.locationName}>
          <h3>{city.locationName}</h3>
          <div className="content">
            {
              city.weatherElement[0].time.map((time,index)=>{
return(

<div className="item2" key={index}> 
           {/* <p>4日</p>*/}
           <p>
            {
              new Date(time.startTime).toLocaleString(undefined,{
                day:'numeric'
              })
            }
           </p>
            <p>
              上午6:00
              <br/>~<br/>
              下午6:00
            </p>
<p>

{
              new Date(time.startTime).toLocaleString(undefined,{
                hour:'numeric',
                minute:'numeric'
              })
            }
          
          
          
            <br/>~<br/>

            {
              new Date(time.endTime).toLocaleString(undefined,{
                day:'numeric',
                minute:'numeric'
              })
            }


</p>


    {/*<p><img src="./weatherIcon/陰短暫雨.svg" alt=""/>  </p>*/ } 

<p>  <img src={`./weatherIcon/${time.parameter.parameterName}.svg`}alt=""/></p>

<p>  {time.parameter.parameterName}     </p>





            
           {/*<p>陰短暫雨</p>*/ }   
            {/*  <p> <CiUmbrella/> 30%</p>*/}
              <p> 
                <CiUmbrella/> 
                
                {
                 city.weatherElement[4].time[index].parameter.parameterName
              }

                
                </p>

              </div>



)

              })
            }
            

      
           
          </div>
          </div>
           )
           })
        }


 

       
       
</div>

      </div>


    </>
  )
}

export default App