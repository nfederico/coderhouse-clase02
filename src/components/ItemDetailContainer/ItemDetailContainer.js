import React, { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import itemsMocked from '../../data/data';
import ItemDetail from '../ItemDetail/ItemDetail';
import './Styles.css';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem ] = useState({});
       
   useEffect(() => {
      
    setItem(itemsMocked.filter((element) => element.id == id )[0]);
  }, []);

  
  return(
        <div className="Hcontainer">
        
        <ItemDetail item ={item}/>

        </div>
        
    )
}

export default ItemDetailContainer