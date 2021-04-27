import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import Item from '../Item/Item';
import itemsMocked from '../../data/data';
import './ItemList.css';


const ItemList = ({category}) =>{
    const [data, setData] = useState([]);
      
    useEffect(() => {
             category ? setData(itemsMocked.filter((element) => element.category === category )) : 
             setData(itemsMocked)          ;
        
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