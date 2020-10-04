import React from 'react';
import { useState} from 'react';
import './App.css';
import Contact from './Components/Contact.js';
import Header from "./Components/Header.js";
import LeftSide from './Components/LeftSide.js';
import RightSide from './Components/RightSide.js';



function App() {


  const [backGround, setBg] = useState(false);
  const changeBackground = () => {

    if (window.scrollY >= 1){
      setBg(true)}
        else{
          setBg(false)
      }

      };

      window.addEventListener('scroll', changeBackground);
  

  return (
<div class = {backGround ? 'backGround active' : 'backGround'}>
       
      <Header/>
      <LeftSide/>
      <RightSide/>
      <Contact/>

  
    </div>
  );
};

export default App;
