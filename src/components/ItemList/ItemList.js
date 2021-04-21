import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import Item from '../Item/Item';
import itemsMocked from '../../data/data';
import './Styles.css';


const ItemList = ({category}) =>{
    const [data, setData] = useState([]);
      
    useEffect(() => {
             category ? setData(itemsMocked.filter((element) => element.category == category )) : 
             setData(itemsMocked)          ;
        
      }, [category]);
    

    return (

        <div className="itemlist-container">
            <ul className="ul-columnas">
            {
            data.map((item)=>(
                    <Link to={`item/${item.id}`}>
                        <li key= {item.id}> 
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