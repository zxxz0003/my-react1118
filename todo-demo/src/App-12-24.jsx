import { useEffect, useState } from "react"

import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

export default function App() {

//建立變數
const[currentImgIndex , setCurrentImgIndex]=useState(0);


  //建立倫波
const slides=[
  {url:"/images4/06.jpg",title:"00"},
  {url:"/images4/07.jpg"},
  {url:"/images4/08.jpg"},
  {url:"/images4/09.jpg"},
 
]

useEffect(()=>{
  //每3秒呼叫nextSlide()換下一張
  const autoplay=setInterval(()=>{
nextSlide();
  },3000);


return()=>clearInterval(autoplay);
},[currentImgIndex]);


//下一張
//是 回第一張
//否 跳下一張
const nextSlide=()=>{
  setCurrentImgIndex((prevIndex)=>(prevIndex===slides.length-1 ? 0 : prevIndex+1))
}





//上一張
//是 跳到最後
//否 跳到前一張
const prevSlide=()=>{
  setCurrentImgIndex((prevIndex)=>(prevIndex===0 ? slides.length-1  : prevIndex-1))
}




//建立左右icon
const Arrow=({direction,onClick})=>(

  //擺放icon的區域
  <div style={{
    position:"absolute",
    top:"50%",
    cursor:"pointer",
    color:"white",

    [direction]:"20PX",  //將icon拆開 且調整左右留白問題
  }}>
    {
      direction==="left"?(
        <GoArrowRight  size={50} onClick={onClick}/>
      ):(    <GoArrowLeft size={50} onClick={onClick}/>)

  
    }

  </div>
)










  return (
    <>
<div className="wrapper" style={{




maxWidth:"100vw",
height:"100vh",
margin:"auto"
}}>
  {/*背景圖*/ }
  <div style={{
   backgroundImage: `url(${slides[currentImgIndex].url})`,

    width:"100%",
    height:"100%",
    backgroundSize:"cover",
    margin:"auto"
  }}>


{/*文字*/ }
<h2 style={{color:"red"}}>{slides[currentImgIndex].title}</h2>
{/*上一張*/ }
<Arrow direction="left" onClick={prevSlide}/>
{/*下一張*/ }
<Arrow direction="right" onClick={nextSlide}/>
  </div>

</div>

    </>
  )
}
