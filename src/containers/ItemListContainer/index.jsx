import React, {useEffect, useState} from 'react';
import './styles.css';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';

import VideoBg from '../../components/VideoBg';
import Loader from '../../components/Loader';


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

                
                    // Firestore
                    //armo query
                /* const q = query(collection(db, "games"));
                //realizo la query
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                }); */


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
           {products.length ? <ItemList products={products}/> : <Loader/>}
           
        </>
    )
}