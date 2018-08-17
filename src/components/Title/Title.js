import React from "react";
import "./Title.css";

const Title = props => 
<div>
<h1 className="title">{props.children}</h1>
<div>
    <p class="gameDescrip">Try and click all 10 images. If you click an image twice, you lose! Click all 10 with no repeats and you win. Good luck!</p>
</div>
</div>;

export default Title;
