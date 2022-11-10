import React from 'react';
import ItemDetail from '../../components/ItemDetail';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import Loader from '../../components/Loader';

const ItemDetailContainer = () => {

  const{id} = useParams()
  const [game, setGame] = useState(null)

  
    useEffect(() => {
      
      const getGameDetail = async () => {
     // hacer el fetch del detalle del producto
     const response = await fetch(`https://api.rawg.io/api/games/${id}?key=4f98277da46b42b8b85a54b79f5ad1a9`);
     const game = await response.json();
     setGame(game);
      }
    getGameDetail();
    }, [id]);
    
  return (
   game ? <ItemDetail game={game} description= {game.description}/> : <Loader/>
  )
}

export default ItemDetailContainer