import { useRef } from "react"



export default function App() {

const grreenRef=useRef(null);
const yellowRef=useRef(null);

const goGreen=()=>{
  window.scrollTo({
    top:greenRef.current.offsetTop,
    behavior:'smooth'
  })

}

const goYellow=()=>{
  window.scrollTo({
    top:greenRef.current.offsetTop,
    behavior:'smooth'
  })

}

  return(
 <>
 {/*offswTop*/ }
 <div ref={yellowRef} style={{
  height:'800px',
  backgroundColor:'yellow'
 }}>
  <button onClick={goGreen}>gr</button>
 </div>


 <div ref={greenRef} style={{
  height:'800px',
  backgroundColor:'green'
 }}>
  <button onClick={goYellow}>yellow</button>
 </div>
 </>

  )
  }