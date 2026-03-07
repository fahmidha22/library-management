import Home from "./Components/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Studentlogin from "./Components/Studentlogin";
import Studentregister from "./Components/Studentregister";
import Adminlogin from "./Components/Adminlogin";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Studentlogin" element={<Studentlogin/>}/>
        <Route path="/Studentregister" element={<Studentregister/>}/>
        <Route path="/Adminlogin" element={<Adminlogin/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;