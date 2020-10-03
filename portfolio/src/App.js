import React from 'react';
import './App.css';
import Contact from './Components/Contact.js';
import Header from "./Components/Header.js";
import LeftSide from './Components/LeftSide.js';
import RightSide from './Components/RightSide.js';



function App() {
  return (
<div>
       
      <Header/>
      <LeftSide/>
      <RightSide/>
      <Contact/>

  
    </div>
  );
}

export default App;
