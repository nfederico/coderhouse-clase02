import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './Item.css';


const Item = ({title,price,pictureUrl,description}) => {
    
      return (
        <div className="Item">
        <Card >
        <CardActionArea>
            <CardMedia
                component="img"
                alt={description}
                height="200"
                width="200"
                image= {pictureUrl}
                title={title}
            />
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
           {title}
          </Typography>
          <Typography variant="body2" component="p">
            {`Precio: $ ${price }`}
          </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>        
            
        </CardActions>
        </Card>
        </div>
    )
    
}

export default Item 