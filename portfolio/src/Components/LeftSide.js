import React from 'react';
import {myJson} from "./text.js";
import "./styles.css";

const LeftSide = () => {
    const pic = require('../assets/mainPic.png');
    const arrow = require('../assets/down-arrow.png');
return( <div> 

<div class = "coder">

    <h1 class="coder-header"> coder 🚀</h1>

<p class="coder">Front-end developer who focuses on writing clean, elegant and efficient code.</p>

<br></br>
<br></br>
<br></br>
<br></br>

<h3>Tech stack: </h3>

<div class="coder-json">{myJson.my_tech_stack}</div>

</div>

<div class = "mainpic">
<img src = {pic} class="pic"></img>
<img src={arrow} class="arrow"></img>

</div>


</div>
)

}

export default LeftSide;