import React, { useState } from "react";
import './control.css';

function BurgerControl() {
  const [ingredients, setIngredients] = useState({
    meat: 0, tomato: 0, salad: 0, cheese: 0,
  });

  const add = (t) => setIngredients(p => ({ ...p, [t]: p[t] + 1 }));
  const remove = (t) => setIngredients(p => ({ ...p, [t]: Math.max(0, p[t]-1) }));

  return (
    <div className="BurgerControls">
      <div className="BurgerControl">
        <span className="Label">Meat: {ingredients.meat}</span>
        <button className="More" onClick={() => add('meat')}>Add</button>
        <button className="Less" onClick={() => remove('meat')} disabled={!ingredients.meat}>Remove</button>
      </div>

      <div className="BurgerControl">
        <span className="Label">Tomato: {ingredients.tomato}</span>
        <button className="More" onClick={() => add('tomato')}>Add</button>
        <button className="Less" onClick={() => remove('tomato')} disabled={!ingredients.tomato}>Remove</button>
      </div>

      <div className="BurgerControl">
        <span className="Label">Cheese: {ingredients.cheese}</span>
        <button className="More" onClick={() => add('cheese')}>Add</button>
        <button className="Less" onClick={() => remove('cheese')} disabled={!ingredients.cheese}>Remove</button>
      </div>

      <div className="BurgerControl">
        <span className="Label">Salad: {ingredients.salad}</span>
        <button className="More" onClick={() => add('salad')}>Add</button>
        <button className="Less" onClick={() => remove('salad')} disabled={!ingredients.salad}>Remove</button>
      </div>

      <button className="OrderButton">Order</button>
    </div>
  );
}
export default BurgerControl;
