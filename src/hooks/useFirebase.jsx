import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

const useFirebase = (genreId) => {

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState ([])

    
    useEffect(()=> {
        
        ( async ()=> {
            try {
                setLoading(true);
               
                    let q;
                    if (genreId) {
                        const categoryCapitalized = capitalizeFirstLetter(genreId)
                        q = query(collection(db, "games"), where ("genre", "==", categoryCapitalized));
                    } else {
                        q = query(collection(db, "games"))
                    }
                //realizo la query
                const querySnapshot = await getDocs(q);
                const productosFirebase = [];
                querySnapshot.forEach((doc) => {
                  // doc.data() is never undefined for query doc snapshots
                
                  productosFirebase.push({...doc.data(), id: doc.id})

                });
                    setData(productosFirebase)

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false)
            }
        })()
    }, [genreId]);

    return [data, error, loading];
}

export default useFirebase