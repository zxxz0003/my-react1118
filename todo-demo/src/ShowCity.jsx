import { CiUmbrella } from "react-icons/ci";
  export default function ShowCity({city}){
   
    return(
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
          
           )
           }
        
     