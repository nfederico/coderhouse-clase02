import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


const ItemCount = ({stock,initial})=>
{   const [count, setCount] = useState(initial);
    
    return (
        <div className="counter-container">
            <p>Cantidad: {count}</p>
            <Button variant="contained" color="primary" onClick={() => {count < stock ? setCount(count + 1):setCount(stock)}}>
                +
            </Button>
            <Button variant="contained" color="secondary" onClick={() => {count > 0 ? setCount(count - 1):setCount(0)}}>
                -
            </Button>     
        </div>
    )
 }

 export default ItemCount;