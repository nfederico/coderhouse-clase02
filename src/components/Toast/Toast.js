import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Toast(message) {
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }



 return (
    <div className="t">
    
     <Snackbar
        anchorOrigin={'bottom', 'left' }
        
        message="I love snacks"
        key={'bottom', 'left' }
      />
     
   
    
  </div>
 )

}

export default Toast;
