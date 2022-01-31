import React, { Component } from "react";


const Child=(props)=> {
 
    return (
      <div>
      <p>pagraph from component</p>
      <p>{props.test}</p>
      </div>
    );
  
}
export default Child;
