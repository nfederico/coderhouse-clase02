import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './ItemDetail.css';

function ItemDetail({item}) {
 
   const {id,title,pictureUrl,description,price} = item;
    console.log(title);
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
        <p>
         <Typography color="primary" gutterBottom align= "center">
           {title}
          </Typography>
          <Typography variant="caption" component="h3" paragraph="true" align= "left">
            Descripción: {description} 
          </Typography>
          <Typography variant="caption" component="h3" paragraph="true" align= "left">
            Precio: $ {price}
          </Typography>
        </p>
        </CardContent>
        </CardActionArea>
       
        </Card>
        </div>
        </div>
    )
}

export default ItemDetail
