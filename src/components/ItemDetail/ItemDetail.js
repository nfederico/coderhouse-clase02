import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
   
   
   const handleQty = (qty) => {     
     setCount(qty)}
    
      
     
    return (
        <div>
            <div className="container">
        <Card >
        <CardActionArea>
            <CardMedia
                component="img"
                alt={title}
                height="140"
                image= {pictureUrl}
                title={title}
            />
        <CardContent>
        
         <Typography color="primary" gutterBottom align= "center">
           {title}
          </Typography>
          <Typography variant="caption" component="h3" paragraph="true" align= "left">
            Descripción: {description} 
          </Typography>
          <Typography variant="caption" component="h3" paragraph="true" align= "left">
            Precio: $ {price}
          </Typography>
       
        
        </CardContent>
       
        </CardActionArea>
        <CardActionArea>
           
          {count>0 ? 
          <Link to="/cart" style={{ textDecoration: 'none'}}><Button variant="outlined" size="small" color="primary" >  Terminar compra   </Button></Link> : 
          <ItemCount stock={5} initial={0} addQuantity ={handleQty}/>}
           
        </CardActionArea>
        
            
        </Card>
         </div>
        </div>
    )
}

export default ItemDetail
