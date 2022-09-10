import logo from "./logo.svg";
import "./App.css";
import AboutSection from "./components/about-section";
import HeroSection from "./components/hero-section";
import React from "react";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // we can use <></>
    // ---- OR ---
    <React.Fragment>  
      <HeroSection />
      <AboutSection />
    </React.Fragment>
  );
}

export default App;
