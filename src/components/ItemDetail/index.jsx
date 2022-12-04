import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/Shop";
import ItemCount from "../ItemCount";



const ItemDetail = ({product}) => {

  
  const {addProduct} = useContext(Shop);

  const [quantityItemDetail, setQuantityItemDetail] = useState(0);

  const navigate = useNavigate();

  const confirmPurchase = (quantity) => {
      addProduct({...product, quantity})
      setQuantityItemDetail(quantity);
  };

  const handleNavigate = () => {
    navigate('/cart')
  }

  return (
      <div>
          <img src={product.image} width={500} alt="detail" />
          <div>
            <h1>{product.name}</h1>
            {quantityItemDetail ? 
              <button onClick={handleNavigate}>Go cart</button>
            : 
              <ItemCount onAdd={confirmPurchase} initial={1} stock={product.quantity} />
            }
          </div>
      </div>
  );
};

export default ItemDetail;