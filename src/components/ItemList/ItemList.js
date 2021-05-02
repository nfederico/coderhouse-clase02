import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import Item from '../Item/Item';
import {db} from '../../database/firebase';

import './ItemList.css';


const ItemList = ({category}) =>{
    const [data, setData] = useState([]);

    const getItems = async () => {
        db.collection('items').onSnapshot((querySnapshot) =>{
            const docs =[];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id})
            });
            setData(docs);
        });
    };

    const getItemsByCategory = async () =>{
        db.collection('items').where('category','==',category).onSnapshot((querySnapshot) =>{
            const docs =[];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id})
            });
            setData(docs);
        });

    };
      
    useEffect(() => {
             category ? getItemsByCategory() : getItems()          ;
        
      }, [category]);
    

    return (

        <div >
            
            <ul className="container" >
            {
            data.map((item)=>(
                    <Link to={`/item/${item.id}`} style={{ textDecoration: 'none'}}>
                        <li key = {item.id}> 
                            <Item title = {item.title} price = {item.price} pictureUrl={item.pictureUrl}/> 
                        </li>
                    </Link>
                   ))
            } 
        </ul>
       
        </div>
       
    )
}

export default ItemList