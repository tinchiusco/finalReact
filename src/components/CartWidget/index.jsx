import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/Shop';
import CartIcon from '../CartIcon';

const CartWidget = () => {
const navigate = useNavigate();

const {totalItemsCart} = useContext(Shop);


  return (
    <div style={
        {
            width: 100,
            height: 35,
            position: 'absolute',
            top: 5,
            right: 50,
            display: "flex",
            flexDirection: "row",
            gap: "5px"
        }
    }
    onClick={() => navigate("/cart")}>

        <CartIcon/>
    {/* <span>{totalItemsCart() === 0 ? null : `(${totalItemsCart()})`}</span> */}
    </div>
  )
}

export default CartWidget