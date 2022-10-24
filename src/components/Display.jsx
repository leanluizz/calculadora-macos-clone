import React from "react";
import '../styles/display.css';

export default props => 
  <div className="display">
    <div>
      <div style={{background: "red"}}></div>
      <div style={{background: "yellow"}}></div>
      <div style={{background: "green"}}></div>
    </div>
    <p>{props.value}</p>
</div>