import React from 'react';
import ItemDetail from '../../components/ItemDetail';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

import Loader from '../../components/Loader';

const ItemDetailContainer = () => {

  const{id} = useParams()
  const [game, setGame] = useState(null)

  
    useEffect(() => {
      
      const getGameDetail = async () => {
     
            //1ero generamos la referencia al documento. Tercer parámetro: es el ID del documento a consultar
            const docRef = doc(db, "games", id);

            //2do generar la petición
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setGame({...docSnap.data(), id: docSnap.id})
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }

        getGameDetail()
        //hacer el fetch del detalle del producto
    }, [id])
    
  return (
   game ? <ItemDetail game={game}/> : <Loader/>
  )
}

export default ItemDetailContainer