import React, {useState,useContext} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import {NotificationContext} from '../../NotificationContext/NotificationContext';


const Toast = (message) =>{
  const {notifications} = useContext(NotificationContext)
 
       return(
        <Alert severity="success">
          {notifications[0].message}
        </Alert>

       )

      

}

export default Toast;
