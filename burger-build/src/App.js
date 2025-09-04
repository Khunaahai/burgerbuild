import React from "react";
import "./App.css";

import Burger from "./components/burgerbuild/burger";
import BurgerControl from "./components/burgercontrol/control";
import Order from "./components/order/order";
import DeliveryPage from "./components/pages/delivery";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";


function BuilderPage() {
  const [meat, setMeat] = React.useState(0);
  const [cheese, setCheese] = React.useState(0);
  const [salad, setSalad] = React.useState(0);
  const [tomato, setTomato] = React.useState(0);

  const IngredientsPrice = {
    meat: 1.5,
    cheese: 1,
    salad: 0.5,
    tomato: 0.7,
  };

  const basePrice = 3;
  const totalPrice =
    basePrice +
    meat * IngredientsPrice.meat +
    cheese * IngredientsPrice.cheese +
    salad * IngredientsPrice.salad +
    tomato * IngredientsPrice.tomato;

  const navigate = useNavigate();

  const addmeat = () => setMeat((v) => v + 1);
  const addcheese = () => setCheese((v) => v + 1);
  const addsalad = () => setSalad((v) => v + 1);
  const addtomato = () => setTomato((v) => v + 1);

  const removemeat = () => setMeat((v) => (v > 0 ? v - 1 : 0));
  const removecheese = () => setCheese((v) => (v > 0 ? v - 1 : 0));
  const removesalad = () => setSalad((v) => (v > 0 ? v - 1 : 0));
  const removetomato = () => setTomato((v) => (v > 0 ? v - 1 : 0));

  return (
    <div className="App">
      <header className="App-header">
        <h1>Burger Builder</h1>
        <p>Build your own burger!</p>
      </header>

      <main>
        <section>
          <Burger meat={meat} cheese={cheese} salad={salad} tomato={tomato} />

          <BurgerControl
            meat={meat}
            cheese={cheese}
            salad={salad}
            tomato={tomato}
            addmeat={addmeat}
            addcheese={addcheese}
            addsalad={addsalad}
            addtomato={addtomato}
            removemeat={removemeat}
            removecheese={removecheese}
            removesalad={removesalad}
            removetomato={removetomato}
          />
        </section>

        <section className="price-details">
          <h2>Price Details</h2>
          <p>Base Price: ${basePrice.toFixed(2)}</p>
          <p>Meat: ${(meat * IngredientsPrice.meat).toFixed(2)}</p>
          <p>Cheese: ${(cheese * IngredientsPrice.cheese).toFixed(2)}</p>
          <p>Salad: ${(salad * IngredientsPrice.salad).toFixed(2)}</p>
          <p>Tomato: ${(tomato * IngredientsPrice.tomato).toFixed(2)}</p>
          <hr />
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </section>

        <Order
          meat={meat}
          cheese={cheese}
          salad={salad}
          tomato={tomato}
          navigate={navigate}
        />
      </main>

      <footer className="App-footer">
        <p>&copy; 2025 Burger Builder</p>
      </footer>
    </div>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BuilderPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
