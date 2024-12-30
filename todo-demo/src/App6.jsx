import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Nabar";
import About from "./pages/About";
import Home from "./pages/Home";
import News from "./pages/News";


export default function App(){
  return(
   <div className="wrap">
   
<Navbar />
<hr/>
<Routes>

 <Route path="/" element={<Home/>}></Route>
 <Route path="/about" element={<About/>}></Route>
 <Route path="/new" element={<News/>}></Route>

<Route path="/login" element={<Login/>}></Route>
<Route path="/user" element={<User/>}></Route>
</Routes>


   </div>
  )
}