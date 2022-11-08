import React from 'react';
import ItemDetail from '../../components/ItemDetail';
import { useEffect } from 'react';

const ItemDetailContainer = () => {

    useEffect(() => {
     // hacer el fetch del detalle del producto
    }, []);
    
  return (
   <ItemDetail />
  )
}

export default ItemDetailContainer