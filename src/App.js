import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path='/services' element={<Services/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
