import React from "react";
import "./order.css";
import { useNavigate } from "react-router-dom";

export default function Order(props) {
  const navigate = useNavigate();

  const totalPrice = (
    3 +
    props.meat * 1.5 +
    props.cheese * 1 +
    props.salad * 0.5 +
    props.tomato * 0.7
  ).toFixed(2);

  const handleGoDelivery = () => {
    
    const order = {
      meat: props.meat,
      cheese: props.cheese,
      salad: props.salad,
      tomato: props.tomato,
      totalPrice: Number(totalPrice),
    };

    

    navigate("/delivery", { state: { orderData: order } });
  };

  return (
    <div className="order-summary">
      <h2>Your Order Summary</h2>
      <ul>
        <li>Meat: {props.meat}</li>
        <li>Cheese: {props.cheese}</li>
        <li>Salad: {props.salad}</li>
        <li>Tomato: {props.tomato}</li>
      </ul>

      <p>Total Price: ${totalPrice}</p>

      <button
        className="confirm-button"
        onClick={() => {
          window.alert("Order Confirmed!");
          handleGoDelivery();
        }}
        disabled={!props.meat && !props.cheese && !props.salad && !props.tomato}
      >
        Confirm Order
      </button>

      <button className="cancel-button" onClick={() => navigate("/")}>
        Cancel
      </button>

      <button className="back-button" onClick={() => navigate("/")}>
        Back to Builder
      </button>

      <button className="delivery-button" onClick={handleGoDelivery}>
        Delivery
      </button>
    </div>
  );
}
