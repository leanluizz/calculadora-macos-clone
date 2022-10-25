import React from "react";
import '../styles/display.css';

export default props => 
  <div className="display">
    <div>
      <div style={{background: "rgb(54, 5, 5)"}} className="red"></div>
      <div style={{background: "rgb(92, 92, 12)"}} className="yellow"></div>
      <div style={{background: "rgb(58, 88, 13)"}} className="green"></div>
    </div>
    <p>{props.value}</p>
</div>