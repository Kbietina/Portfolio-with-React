import React from 'react';
import {myJson} from "./text.js";
const RightSide = () => {

return( <div> 

    <div class = "designer">

    <h1 class="designer-header"> 🌿 designer</h1>

<p class="designer">UI/UX designer with passion of designing beautiful and native user experiences.</p>
<br></br>
<br></br>
<br></br>
<br></br>

<h3> Creative stack: </h3>
<div class="designer-json">{myJson.my_creative_stack}</div>
</div>

</div>
)

};

export default RightSide;