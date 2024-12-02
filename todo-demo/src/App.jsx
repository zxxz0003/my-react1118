import { useEffect } from "react"
import axios from 'axios';
function App(){

/ useEffect(()=>{
(async()=>{
  const data =await axios.get('./todo-demo/F-C0032-001.json');
  const{location}=data.data.cwaopendata.dataset;
  console.log(locaton);
})
  },[]) 

  return (
    <>
  <h2>36小時天氣</h2>
  <h3>台北市</h3>
  <h3>2日</h3> 
  <h5>上午6:00</h5>
          ~
  <h5>下午6:00</h5>
  
  <div class="card-img-top" style={{
                                   
                                   height:'200px', 
                                   backgroundImage:`url('todo-demo/weatherIcon/多雲.svg')`,
                                  backgroundSize:"cover",
                                  backgroundPosition:"center center",
                               }}>123</div>
  

    
    </>
  )
}

export default App