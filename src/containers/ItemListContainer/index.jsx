import React, {useEffect, useState} from 'react';
import './styles.css';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import { ClimbingBoxLoader } from 'react-spinners';
import VideoBg from '../../components/VideoBg';

export default function ItemListContainer () {

    const [products, setProducts] = useState([]);

    const {genreId} = useParams();
    console.log(genreId);

 // opciones para ingresar al fetch
 
 

    useEffect(()=> {
        
        ( async ()=> {
            try {
                let response;
                if (genreId) {
                    response = await fetch(`https://api.rawg.io/api/games?key=4f98277da46b42b8b85a54b79f5ad1a9&genres=${genreId}`);
                }else {
                    response = await fetch(`https://api.rawg.io/api/games?key=4f98277da46b42b8b85a54b79f5ad1a9&metacritic=90,100`)};
                console.log(response);
                const data = await response.json();
                ;
                setProducts(data.results)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [genreId]);

    console.log(products);

    return (
        <>
            <VideoBg/>
           {products.length ? <ItemList products={products}/> : <ClimbingBoxLoader/>}
           
        </>
    )
}