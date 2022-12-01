import React from "react";
import { useContext } from "react";
import CartItem from '../../components/CartItem';
import { Shop } from "../../context/Shop";

const CartContainer = () => {
    const {products, calculateTotal} = useContext(Shop);

    const confirmPurchase = () => {

        //aca agregar formulario de compra
        
        const nombreComprador = "Martin";
        const telefono = 3751679948;
        const email = "tinchillo@gmail.com";

        const generatedOrder = generateOrderObject(nombreComprador, email, telefono, products, calculateTotal())

    }

    return (
        <div>
            {products.map(product => {
                return <CartItem key={product.id} item = {product}/>
            })}
            <button className='btn btn-info p-3' onClick={confirmPurchase}>Buy</button>
        </div>
    )
}

export default CartContainer;