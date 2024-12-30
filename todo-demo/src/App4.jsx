import { useEffect } from "react"
import axios from 'axios';
import { CiUmbrella } from "react-icons/ci";
import './App.css'
function App() {

  const[weatherList,setWeatherList]=useState([]);
  useEffect(()=>{
 (async()=>{
   const data =await axios.get('https://zxxz0003.github.io/my-react1118/json/F-C0032-001.json');
   const{location}=data.data.cwaopendata.dataset;
   console.log(locaton);

   //locationName =>縣市名稱
   //elementName => WX =>天氣概況
   //elementName=> PoP =>降雨機率
 })()
   },[]) 

  return (
    <>
      <div className="wrap">
        <h2>36小時</h2>
        


       
        {/*一列2藍*/}
        <div className="row">


        {

        location.map((city)=>{
          return(
            
            <div className="col">
            {/*卡片樣式*/}
            <div className="card">
            {/*標題*/}
            <div className="card-title">台北市</div>
            {/*內容*/}
            <div className="card-body">

              {/*一列三蘭*/}
              <div className="row2">
                {/*第一欄*/}
                <div className="col2">
                  <p>2日</p>
                  <p>上午6:00<br />
                    ~<br />
                    下午6:00<br />

                  </p>
                  <p>
                    <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
                  </p>

                  <p>多雲</p>
                  <p><CiUmbrella />10%</p>

                </div>

                {/*第二欄*/}
                <div className="col2">
                  <p>2日</p>
                  <p>上午6:00<br />
                    ~<br />
                    下午6:00<br />

                  </p>
                  <p>
                    <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
                  </p>

                  <p>多雲</p>
                  <p><CiUmbrella />10%</p>

                </div>


                {/*第三欄*/}
                <div className="col2">
                  <p>2日</p>
                  <p>上午6:00<br />
                    ~<br />
                    下午6:00<br />

                  </p>
                  <p>
                    <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
                  </p>

                  <p>多雲</p>
                  <p><CiUmbrella />10%</p>

                </div>



              </div>


            </div>
          </div>
        </div>
          )
        })



        }



         
        <div className="col">第二欄</div>


      </div>
      </div>


    </>
  )
}

export default App