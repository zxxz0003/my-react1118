
import $ from 'jquery'
import{useEffect}from 'react';


import AOS from 'aos';

import 'aos/dist/aos.css';


export default function App(){

  useEffect(()=>{
 AOS.init();


},[])


  return(
  <>
  <h1 data-aos="fade-right">AOS-fade-right</h1>
  <div className='box' data-aos="fade-up" data-aos-duration="1000">

  <p>fade-up</p>


  </div>
 
  </>
  )
}