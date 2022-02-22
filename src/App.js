import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
 

function App() {
  return (
    <>
      <Router>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
