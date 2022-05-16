import {Routes,Route, useLocation} from "react-router-dom"; 
import NavBar from "./components/NavBar"
import Template from "./components/Template"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
 
function App() {

  const location = useLocation()
  return (
    <>
    <NavBar/>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
   </Routes>
   </>
  );
}

export default App;
