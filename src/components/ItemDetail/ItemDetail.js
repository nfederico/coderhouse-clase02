import React, { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../../CartContext/CartContext';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ItemCount from '../../components/ItemCount/ItemCount';


import './ItemDetail.css';

function ItemDetail({item}) {
 
   const {title,pictureUrl,description,price} = item;
   const [count, setCount] = useState(0)
   const {addItem,cart} = useContext(CartContext);
   
   const handleQty = (qty) => {     
     setCount(qty)
     addItem({item,qty:qty})
     console.log({item,qty:qty});
     
     console.log(cart)
    }
    
      
     
    return (
        
            <div className="container">
        <Card >
        <CardActionArea>
            <CardMedia
                component="img"
                alt={title}
                height="300"
                width="300"
                image= {pictureUrl}
                title={title}
            />
        <CardContent>
        
         <Typography color="primary" gutterBottom align= "center">
           {title}
          </Typography>
          <Typography variant="caption" component="h3"  align= "left">
            Descripción: {description} 
          </Typography>
          <Typography variant="caption" component="h3" align= "left">
            Precio: $ {price}
          </Typography>
       
        
        </CardContent>
       
        </CardActionArea>
       <div className="algo">
       <CardActionArea >
           
           {count>0 ? 
           <Link to="/cart" style={{ textDecoration: 'none'}}><Button variant="outlined" size="small" color="primary" >  Terminar compra   </Button></Link> : 
           <ItemCount stock={5} initial={0} addQuantity ={handleQty}/>}
            
         </CardActionArea>
       </div>
        
            
        </Card>
         </div>
        
    )
}

export default ItemDetail
