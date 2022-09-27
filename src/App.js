import logo from './logo.svg';
import './App.css';
import Homepage from '../src/components/Homepage/index.js';
import Navbar from './components/Navbar';
import About from './components/About';
import Playbar from './components/Playbar';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import { useRef } from 'react';

function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const handleClick = () => {
    console.log(ref1)
    ref1.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleClick2 = () => {
    console.log(ref2)
    ref2.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleClick3 = () => {
    console.log(ref3)
    ref3.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Playbar />
      <div className='page'>
        <Sidebar handleClick={handleClick} handleClick2={handleClick2} handleClick3={handleClick3}/>
        <div className='content'>
          <Homepage ref1 = {ref1} handleClick2={handleClick2} handleClick3={handleClick3}/> 
          <div className='space'></div>
          <About ref2 = {ref2}/>
          <div className='space'></div>
          <Projects ref3 = {ref3}/>
          <div className='space'></div>
        </div>
      </div>

    </div>
  );
}

export default App;
