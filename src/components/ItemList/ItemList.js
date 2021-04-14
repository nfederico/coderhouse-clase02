import React, { useState } from 'react';
import Item from '../Item/Item';
import itemsMocked from '../../data/data';
import './Styles.css';


const ItemList = () =>{
    const [data, setData] = useState([]);
    setTimeout(() => {setData(itemsMocked)},2000); 
    
    return (

        <div className="itemlist-container">
            <ul className="ul-columnas">
            {
            data.map((item)=>(
                    <li key= {item.id}> 
                        <Item title = {item.title} price = {item.price} pictureUrl={item.pictureUrl}/> 
                    </li>))
            } 
        </ul>
        </div>
       
    )
}

export default ItemList