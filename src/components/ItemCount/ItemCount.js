import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';



const ItemCount = ({stock,initial, addQuantity})=>
{   const [count, setCount] = useState(initial);

   
     
    const handleAddQty = () =>{
        addQuantity(count)
        
    }
    return (
        <div className="ItemCount-container">
           <div className="ItemCount-container-child">
           <p>Cantidad: {count}</p>           
            <Icon onClick={() => {count < stock ? setCount(count + 1):setCount(stock)}} color="primary" style={{ fontSize: 30 }} >add_circle</Icon>
            <Icon onClick={() => {count > 0 ? setCount(count - 1) :setCount(0) }} color="secondary"  style={{ fontSize: 30 }}>remove_circle</Icon>
            
            {count>0 && <Button variant="outlined" size="small" color="primary" onClick= {handleAddQty}  >
            Agregar al carrito
           </Button> }  
           </div>
        </div>
    )
 }

 export default ItemCount;