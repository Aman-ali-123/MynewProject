
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Car1 from "./components/Car/car1";


function App(){
   return(
    // <>
    //   <h1>I am from App</h1>
    //   <Homepage/>
    //   <Login/>
    // </>

    <>
    {/* <h1>I am from App</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Homepage" element={<Homepage/>}></Route>
          <Route path="/Signup" element={<Signup />}></Route> 
          <Route path="/car" element={<Car1/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
    
    
   )
};

export default App;