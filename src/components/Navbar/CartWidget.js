import React , {useContext,useState} from 'react';

import { green} from '@material-ui/core/colors';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {CartContext} from '../../CartContext/CartContext';


const CartWidget = () => {
    const {cart} = useContext(CartContext);
    return (
        <div>
            <Badge badgeContent={cart.length}>
                <ShoppingCartIcon  style={{fontSize:25,color:green[900]}}/>
             </Badge>
        </div>
        
    )

}   

export default CartWidget