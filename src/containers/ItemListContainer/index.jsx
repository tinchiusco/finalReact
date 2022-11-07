import React, {useEffect, useState} from 'react';
import './styles.css';

import ItemList from '../../components/ItemList';

export default function ItemListContainer () {

    const [products, setProducts] = useState([])

    

    useEffect(()=> {
        ( async ()=> {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                console.log(response);
                const data = await response.json();
                console.log(data);
                setProducts(data.results)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    console.log(products);

    return (
        <>
            <ItemList products={products}/>
        </>
    )
}