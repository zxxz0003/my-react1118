import { useRef, useState } from "react";



export default function App() {

//const[vale,setValue]=useState('');
//建立一個useRef的變數

const inputRef=useRef(null);


console.log('App render');
  const submitHandler=()=>{
    //console.log(value);
    //查看值
    console.log(inputRef.current);
    //查看類型
    console.log(inputRef.current.type);
    //更改類行為password
    inputRef.current.type="password"
  }
  return(
 <>
 {/*<input type="text" onChange={(e)=>setValue(e.target.value)}/>*/}
 <input type="text" ref={inputRef} />
 <button onClick={submitHandler}>送出</button>
 </>

  )
  }