import React, { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {db} from '../../database/firebase';

import ItemDetail from '../ItemDetail/ItemDetail';
import './Styles.css';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem ] = useState({});

    const getitemById = async () =>{
        db.collection('items').where('id','==',id).onSnapshot((querySnapshot) =>{
            const docs ={};
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id})
            });
            setItem(docs);
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