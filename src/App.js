import Home from "./Components/Home";

import Category from "./Components/Category";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Studentlogin from "./Components/Studentlogin";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/studentlogin" element={<Studentlogin/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;