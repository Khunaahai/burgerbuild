import React from "react";
import './burger.css';


const Burger = () => {
    return (
        <div className="burger">
            <div className="bun-top">
                <div className="seeds1"></div>
                <div className="seeds2"></div>
                <div className="seeds3"></div>
            </div>


            <div className="salad">salad</div>
            <div className="tomato">tomato</div>
            <div className="cheese">cheese</div>
            <div className="meat">Meat</div>

            <div className="bun-bottom"></div>
        </div>
    );
};

export default Burger;  