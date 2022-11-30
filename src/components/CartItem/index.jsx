import React from 'react';
import { useContext } from 'react';
import { Shop } from '../../context/Shop';
import ThrashCanIcon from '../TrashCanIcon'

const CartItem = ({item}) => {

     const {removeProduct} = useContext(Shop);
    const handleRemove = () => {
        removeProduct(item.id)
    
    }
  return (
    <div style={{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'left',
        padding: 30,
        gap: 40,
        alignItems: 'center'
    }}>
        <img src={item.image} width={150} alt='cart-item'/>
            <h1>{item.name}</h1>
            <p>{item.quantity}</p>
            <div style={{width: 30}} onClick={handleRemove}>
            <ThrashCanIcon />
            </div>
    </div>
  )
}

export default CartItem