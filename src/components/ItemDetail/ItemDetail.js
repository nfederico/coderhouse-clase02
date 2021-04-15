import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function ItemDetail({item}) {
   const {title,pictureUrl,description,price} = item;
    
    return (
        <div>
            <div className="Item">
        <Card >
        <CardActionArea>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image= {pictureUrl}
                title="Contemplative Reptile"
            />
        <CardContent>
         <p>
         <Typography color="textSecondary" gutterBottom>
           {title}
          </Typography>
          <Typography variant="body" component="p">
            Description: {description }
          </Typography>
          <Typography variant="body" component="p">
            Price:{price }
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
