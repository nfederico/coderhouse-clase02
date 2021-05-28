import React, {useContext}from 'react'
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import Paper from '@material-ui/core/Paper';
import { NotificationContext } from '../../NotificationContext/NotificationContext';

function Order() {
    const {notifications,clear} = useContext(NotificationContext);
    console.log(notifications)
     const handleClose = () =>{
         clear()
     }
    return (
        notifications.length > 0 ? 
        (
        <div className="container">
            <Paper variant="outlined" elevation={3} >  
                <p>Gracias por su compra. 
                    Su Numero de orden es: {notifications[0].message} </p>
                    <CancelPresentationIcon onClick={handleClose}/>
            </Paper>
        </div>
        )
        :
        (
            <div className="container">
             
            <h1>Usted no tiene ningun pedido </h1>
            
            </div>
        )
    )
}

export default Order
