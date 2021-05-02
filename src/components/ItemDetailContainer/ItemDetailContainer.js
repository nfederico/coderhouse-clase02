import React, { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {db} from '../../database/firebase';

import ItemDetail from '../ItemDetail/ItemDetail';
import './Styles.css';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem ] = useState({});

    console.log(id)

    const getitemById = async () =>{
        db.collection('items').onSnapshot((querySnapshot) =>{
            const docs =[];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id})
            });
            const itemFiltered = docs.filter(element => element.id === id).shift()
           
            setItem(itemFiltered);
        });

    };
       
   useEffect(() => {      
    getitemById();
  }, []);

  
  return(
        <div className="Hcontainer">
        
        <ItemDetail item ={item}/>

        </div>
        
    )
}

export default ItemDetailContainer