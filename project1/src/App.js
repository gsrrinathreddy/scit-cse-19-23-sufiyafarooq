import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import {Routes, Route} from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Qualification from './pages/Qualification';
import Achievements from './pages/Achievements';
import Awards from './pages/Awards';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        < Route path="/AboutMe" element={<AboutMe/>}/>
        < Route path="/Qualification" element={<Qualification/>}/>
      <Route path="/Achievements" element={<Achievements/>}/>
      <Route path="/Awards" element={<Awards/>}/>
        </Routes>
    </div>
  );
}

export default App;
