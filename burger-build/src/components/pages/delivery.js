import "./delivery.css";
import "../order/order.css";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function DeliveryPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Order.jsx-оос ирэх дата
  const orderData = location.state?.orderData || {};
  const { meat = 0, cheese = 0, salad = 0, tomato = 0, totalPrice } = orderData;

  // --- ETA countdown (5 минут) ---
  const INITIAL_MINUTES = 5;
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_MINUTES * 60);

  useEffect(() => {
    if (secondsLeft <= 0) return; // 0 болсон үед зогсооно
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [secondsLeft]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
  };

  // Нийт үнийг тооцоолох (Order-с ирээгүй бол)
  const calcTotal = ({ meat = 0, cheese = 0, salad = 0, tomato = 0 }) =>
    3 + meat * 1.5 + cheese * 1 + salad * 0.5 + tomato * 0.7;

  const total = Number.isFinite(totalPrice)
    ? totalPrice
    : calcTotal({ meat, cheese, salad, tomato });

  return (
    <div className="delivery-page">
      <h1>Delivery Page</h1>
      <p>Estimated delivery time: {formatTime(secondsLeft)}</p>

      <div className="delivery-order">
        <h3>Order Info</h3>
        <ul>
          <li>Meat: {meat}</li>
          <li>Cheese: {cheese}</li>
          <li>Salad: {salad}</li>
          <li>Tomato: {tomato}</li>
        </ul>
        <p>
          <strong>Total:</strong> ${total.toFixed(2)}
        </p>
      </div>

      <div style={{ textAlign: "center", marginTop: 16 }}>
        <button className="OrderButton">
          Order Now
          <span className="total-price"> (${total.toFixed(2)})</span>
        </button>
      </div>

      <div className="delivery-actions" style={{ textAlign: "center", marginTop: 10 }}>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    </div>
  );
}
