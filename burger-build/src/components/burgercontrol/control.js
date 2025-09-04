import React, { useState } from "react";
import './control.css';


function BurgerControl(props) {

  return (
    <div className="control">
      <h2>Add Ingredients</h2>
      <div className="controls">
        <div className="control-item">
          <span>Meat: {props.meat}</span>
          <button onClick={props.addmeat}>Add</button>
          <button onClick={props.removemeat} disabled={props.meat === 0}>Remove</button>
        </div>
        <div className="control-item">
          <span>Cheese: {props.cheese}</span>
          <button onClick={props.addcheese}>Add</button>
          <button onClick={props.removecheese} disabled={props.cheese === 0}>Remove</button>
        </div>
        <div className="control-item">
          <span>Salad: {props.salad}</span>
          <button onClick={props.addsalad}>Add</button>
          <button onClick={props.removesalad} disabled={props.salad === 0}>Remove</button>
        </div>
        <div className="control-item">
          <span>Tomato: {props.tomato}</span>
          <button onClick={props.addtomato}>Add</button>
          <button onClick={props.removetomato} disabled={props.tomato === 0}>Remove</button>
        </div>
      </div>
    </div>
  );
}



export default BurgerControl;
