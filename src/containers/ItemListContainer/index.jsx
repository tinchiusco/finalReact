import React from 'react';
import './styles.css';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import VideoBg from '../../components/VideoBg';
import Loader from '../../components/Loader';
import useFirebase from '../../hooks/useFirebase';


export default function ItemListContainer () {

    const { genreId } = useParams();
    const [data, error, loading] = useFirebase(genreId); 

    return (
        <>
            <VideoBg/>
            {(data.length && !loading &&!error)
            ? <ItemList products={data} />
            : error
            ? <h1>{error}</h1>
            : loading
                ? <Loader />
                : null
            }
            
        </>
    )
}