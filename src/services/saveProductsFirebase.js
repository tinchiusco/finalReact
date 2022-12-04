
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import games from '../data/gamesList.json'

const saveProductsFirebase = async () =>{
try {

    games.forEach(async (game) => {
    
            const docRef = await addDoc(collection(db, "games"), {
                name: game.name,
                price: game.price,
                background_image: game.background_image,
                quantity: game.quantity,
                metacritic: game.metacritic,
                genres: game.genres,
                description: game.description
                
            });
            console.log("Document written with ID: ", docRef.id);
        })
        
    } catch (error) {
        console.log(error)
    }
}

export default saveProductsFirebase;