import React from "react";
import './burger.css';

const Burger = (props) => {
  
  const renderLayers = (count, className, label) =>
    Array.from({ length: count }, (_, i) => (
      <div key={`${className}-${i}`} className={className}>
        {label}
      </div>
    ));

  return (
    <div className="burger">
      <div className="bun-top">
        <div className="seeds1"></div>
        <div className="seeds2"></div>
        <div className="seeds3"></div>
      </div>

      
      {renderLayers(props.salad, "salad", "Salad")}
      {renderLayers(props.tomato, "tomato", "Tomato")}
      {renderLayers(props.cheese, "cheese", "Cheese")}
      {renderLayers(props.meat, "meat", "Meat")}

      <div className="bun-bottom"></div>
    </div>
  );
};

export default Burger;
