import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from "./Components/About"
import Services from './Components/Services'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact, {Mailto} from './Components/Contact'



function App() {
  return (
      <div className="App">
        <Navbar/>
        <Home />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
        <Mailto email="kaustubh.tripathi6798@gmail.com">
        Say Hello!
        </Mailto>
      </div>
  );
}

export default App;
