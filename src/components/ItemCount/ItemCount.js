import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


const ItemCount = ({stock,initial, addQuantity})=>
{   const [count, setCount] = useState(initial);
    
    return (
        <div className="counter-container">
            <p>Cantidad: {count}</p>
            <Button variant="contained" size="small" color="primary" onClick={() => {count < stock ? setCount(count + 1):setCount(stock)}}>
                +
            </Button>
            <Button variant="contained" size="small" color="secondary" onClick={() => {count > 0 ? setCount(count - 1) :setCount(0) }}>
                -
            </Button>   
            {count>0 && <Button variant="outlined" size="small" color="primary" onClick= {addQuantity(count)}  >
            Comprar
           </Button> }  
        </div>
    )
 }

 export default ItemCount;