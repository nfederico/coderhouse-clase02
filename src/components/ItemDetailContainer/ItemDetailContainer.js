import React, { useState,useEffect } from 'react';
import itemsMocked from '../../data/data';
import ItemDetail from '../ItemDetail/ItemDetail';
import './Styles.css';

const ItemDetailContainer = () => {
    
    const [item, setItem ] = useState([]);
    const getItem = new Promise((req, res) => {
    setTimeout(() => {
      req(itemsMocked[0]);
    }, 2000);
  });
    
   useEffect(() => {
    getItem.then((item) => {
      setItem(item)});
  }, []);

 

    return(
        <div className="container">
        
        <ItemDetail item ={item}/>

        </div>
        
    )
}

export default ItemDetailContainer