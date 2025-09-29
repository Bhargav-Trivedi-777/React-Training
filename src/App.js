import { useState } from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
import About from './components/About.js';
import Utils from './components/Utils.js';
import Alert from './components/Alert.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (Message, type) => {
    setAlert({
      Msg: Message,
      Type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (!darkMode) {
      document.body.style.background = "black";
      showAlert("Dark mode has been Enabled", "success");
    } else {
      document.body.style.background = "white";
      showAlert("Light mode has been Enabled", "success");
    }
    setDarkMode(!darkMode);
  };

  const removeClass = () => {
    document.querySelector(".app")?.classList.remove('dark-mode')
    document.querySelector(".app")?.classList.remove('light-mode')
    document.querySelector(".app")?.classList.remove('bg-primary')
    document.querySelector(".app")?.classList.remove('bg-danger')
    document.querySelector(".navbar")?.classList.remove('bg-dark')
    document.querySelector(".navbar")?.classList.remove('bg-light')
    document.querySelector(".navbar")?.classList.remove('navbar-light')
    document.querySelector(".navbar")?.classList.remove('navbar-dark')
    document.querySelector(".navbar")?.classList.remove('bg-primary')
    document.querySelector(".navbar")?.classList.remove('bg-danger')
    document.documentElement.classList.remove('bg-primary')
    document.documentElement.classList.remove('bg-danger')
  }

  let makeBlue = (cls) => {
    removeClass()
    if(cls === "red"){
      document.querySelector(".app")?.classList.add('bg-danger')
      document.querySelector(".navbar")?.classList.add('bg-danger')
      document.documentElement.classList.add('bg-danger')
    }else if(cls === "blue")
    document.querySelector(".app")?.classList.add('bg-primary')
    document.querySelector(".navbar")?.classList.add('bg-primary')
    document.documentElement.classList.add('bg-primary')
  }


  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      <Router>
        <Navbar
          siteTitle="DemoTitle"
          page1="Home"
          page2="Content"
          page3="About"
          darkMode={darkMode}
          toggleMode={toggleMode}
          color={makeBlue}
        />
        <Alert alert={alert} />
        <Routes>
          {/* add exact in route to match the exact page url */}
          <Route exact path="/about" element={
            <About darkMode={darkMode} />}
          />
          <Route exact path="/" element={
            <Utils
              heading="Enter Text"
              darkMode={darkMode}
              toggleMode={toggleMode}
              showAlert={showAlert} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
