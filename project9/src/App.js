import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Aboutme from './Pages/Aboutme';
import Skills from './Pages/Skills';
import Qualification from './Pages/Qualification';
import Achievements from './Pages/Achievements';
import Certifications from './Pages/Certifications';
import Hobbies from './Pages/Hobbies';
import Experience from './Pages/Experience';
import Contactme from './Pages/Contactme';
import Projects from './Pages/Projects';
import Workshops from './Pages/Workshops';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        < Route path="/Aboutme" element={<Aboutme/>}/>
        < Route path="/Qualification" element={<Qualification/>}/>
        < Route path="/Skills" element={<Skills/>}/>
        < Route path="/Achievements" element={<Achievements/>}/>
        < Route path="/Certifications" element={<Certifications/>}/>
        < Route path="/Hobbies" element={<Hobbies/>}/>
        <Route path='/Experience' element={<Experience/>}/>
        < Route path="/Contactme" element={<Contactme/>}/>
        < Route path="/Projects" element={<Projects/>}/>
        < Route path="/Workshops" element={<Workshops/>}/>

      
        </Routes>
    </div>
  );
}

export default App;
