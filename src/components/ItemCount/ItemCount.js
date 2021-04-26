import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const ItemCount = ({stock,initial, addQuantity})=>
{   const [count, setCount] = useState(initial);
    const handleAddQty = () =>{
        addQuantity(count)
    }
    return (
        <div className="counter-container">
            <p>Cantidad: {count}</p>
            <Button variant="contained" size="small" color="primary" onClick={() => {count < stock ? setCount(count + 1):setCount(stock)}} style={{borderRadius: '25%',width: '3rem', height: '3rem' }}>
                +
            </Button>
            <Button variant="contained" size="small" color="secondary" onClick={() => {count > 0 ? setCount(count - 1) :setCount(0) }} style={{borderRadius: '25%',width: '3rem', height: '3rem' }}>
                -
            </Button>   
            {count>0 && <Button variant="outlined" size="small" color="primary" onClick= {handleAddQty}  >
            Comprar
           </Button> }  
        </div>
    )
 }

 export default ItemCount;