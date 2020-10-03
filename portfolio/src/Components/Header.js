import React from 'react';
import {myJson} from "./text.js";
import "./styles.css";


const logo = require('../assets/k-100.png');
const linkedin = require('../assets/linkedin-50.png');
const github = require('../assets/github-50.png');
const behance = require('../assets/behance-50.png');
const twitter = require('../assets/twitter-50.png');
const Header = () => {

return( <div>
<div>  <img src = {logo} class = "logo-portfolio"/>    </div>

<div> 
  <h1 class="hello"> Hello! My name is {myJson.my_name} 👋🏻</h1>
    
    </div>



<div class = "socialMedia">


<div> 
<a href ={myJson.linkedin_link}> <img src = {linkedin} class = "linkedin"/></a>
</div>
<div> 
<a href ={myJson.github_link}> <img src = {github}  class = "github"/> </a>  
</div>
<div>   
<a href ={myJson.behance_link}> 
<img src = {behance} class = "behance"/>  
</a>
</div>
<div> 
<a href = {myJson.twitter_link}>
<img src = {twitter}  class = "twitter"/>    
</a>
 </div>

 </div>


</div>
)

}

export default Header;