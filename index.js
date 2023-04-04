import React from "react";
import ReactDOM from "react-dom";

const index = 0;   
// const element = React.createElement("h1", {className: 'heading'}, null, 'hello');

setInterval(()=>{

  const element = (
  
  <h1 className="heading" tabIndex={index}> 
  <span className="Text"> Hello word {new Date().toLocaleTimeString()}</span>
  <img src=""/>
 
 </h1>
 
 );

 ReactDOM.render(element, document.getElementById('root'));


}, 1000);





/*
jsx er januine formate
element = {
  type:'h1',
  props: {
    className: 'heading',
    tabIndex: 0,
    children: [
      {
        type: 'span',
        props: {
          className:'text'
        }
      },
      {
        type: 'img',
        props:{
          src: '';
        }
      }
    ]
  }

}


*/ 

console.log(element);