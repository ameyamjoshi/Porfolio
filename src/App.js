
import './App.css';
import Baner from './Baner';
import Expereince from './Expereince';
import Footer from './Footer';
import NavBar from './NavBar';
import Projects from './Projects';
import Skills from './Skills';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Baner/>
    {/* <Expereince/> */}
    <Projects/>
    <Skills/>
    <Footer/>
        </div>
  );
}

export default App;
