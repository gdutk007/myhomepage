import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import './CSS/stars.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main id="dark-background">
      <br/>
      <br/>
      <br/>
      <br/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my Page!
        </p>
        <br/>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <br/>
        <br/>
        <body>
        <p style={{color: "white"}}>

        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p style={{color: "white"}}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
        </p>
        <p style={{color: "white"}}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
        </p>
        </body>
      </main>

    </div>
  );
}

export default App;
