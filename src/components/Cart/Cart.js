import React , {useContext,useState} from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../../CartContext/CartContext';
import './Cart.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


function Cart() {
    const {cart,removeItem,clear} = useContext(CartContext);
    const [myCart, setMyCart] = useState(cart)
    
    const cartStatus = myCart.length
    console.log(myCart.length)
    return (
        cartStatus > 0 ? 
            
            (
             <div className="cart-container">
             <Grid item xs={16} md={6}>
            <Typography variant="h4" >
            Tu carrito
            </Typography> 
            <List>
                {myCart.map((element) => (<ListItem key = {element.item.item.id}>
                <ListItemAvatar>
                    <Avatar src= {element.item.item.pictureUrl}/>
                </ListItemAvatar>    
                <ListItemText 
                    primary= {element.item.item.title} 
                    secondary = {`Descripcion: ${element.item.item.description} Precio Unitario: ${element.item.item.price} Cantidad seleccionada: ${element.qty.qty}`} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick = {removeItem}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>    

                </ListItem>))}

            </List>
                    
        </Grid>

    </div> 
            )
            
            
            : 
    (
        <div className="cart-container" >

           
           <Typography variant="h4" > No hay Items </Typography> 

           <Link to="/" style={{ textDecoration: 'none'}}>     
           <Button variant="outlined" size="small" color="primary" > Comezar a comprar </Button>
           </Link>
                 
            
           
          
        </div>
    )





        
    )
}

export default Cart;
