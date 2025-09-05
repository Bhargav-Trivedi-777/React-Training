import { useState } from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
import About from './components/About.js';
import Utils from './components/Utils.js';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (!darkMode) {
      document.body.style.background = "black";
    } else {
      document.body.style.background = "white";
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      <Navbar
        siteTitle="DemoTitle"
        page1="Home"
        page2="Content"
        page3="About"
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Utils heading="Enter Text" darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {/* <About darkMode={darkMode} /> */}
    </div>
  );
}

export default App;
