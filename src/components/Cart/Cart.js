import React , {useContext} from 'react';
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
    const cartStatus = cart.length
    
    const remove = (id) =>{
       console.log(id)
        // const id= "agjBLeDkcEs56qnSqawa"
        removeItem(id)
        
    }
   
    return (
        cartStatus > 0 ? 
            
            (
                
             <div className="cart-container">
                 <Grid item xs={16} md={6}>
                    <Typography variant="h4" >
                         Tu carrito
                    </Typography> 
                    <List>
                     {cart.map((element) => (<ListItem key = {element.item.id}>
                        <ListItemAvatar>
                            <Avatar src= {element.item.pictureUrl}/>
                        </ListItemAvatar>    
                        <ListItemText 
                            primary= {element.item.title} 
                            secondary = {`Descripcion: ${element.item.description} Precio Unitario: ${element.item.price} Cantidad seleccionada: ${element.qty}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick = {remove}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>    

                         </ListItem>))}

                         <ListItem key ="adasdsa">
                        <ListItemText primary={`Total: $ ${cart.reduce((accum,element) =>(accum +(element.item.price * element.qty)),0)}`}/>
             
                        </ListItem>

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
