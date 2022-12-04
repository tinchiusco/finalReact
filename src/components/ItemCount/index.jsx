import React, { useState } from "react";
import "./styles.css";

const ItemCount = ({onAdd, stock, initial}) => {

    const [count, setCount] = useState(initial);

    const onPlus = () => {
        if (count < stock) setCount(count + 1)
    }

    const onDecrement = () => {
        if (count > initial) setCount(count - 1)
    }
    return <div className="quantityButton">
        <button className="quantityButton" onClick={onDecrement}>-</button>
        <span className="quantityButton">{count}</span>
        <button className="quantityButton" onClick={onPlus}>+</button>
        <button className="quantityButton" onClick={()=>onAdd(count)}>Purchase</button>
    </div>;
};

export default ItemCount;
