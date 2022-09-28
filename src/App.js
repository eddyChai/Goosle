import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path="/search" element={<Home/>}/> */}
          <Route path="/Goosle/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
