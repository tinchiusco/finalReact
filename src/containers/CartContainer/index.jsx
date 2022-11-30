import React from "react";
import { useContext } from "react";
import CartItem from '../../components/CartItem';
import { Shop } from "../../context/Shop";

const CartContainer = () => {
    const {products} = useContext(Shop);

    return (
        <div>
            {products.map(product => {
                return <CartItem key={product.id} item = {product}/>
            })}
        </div>
    )
}

export default CartContainer;