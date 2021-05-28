import React, { useState, createContext } from 'react';


export const NotificationContext = createContext();

export const NotificationProvider = (props) => {
   
  
    const [notifications,setNotifications] = useState([]);

  

    const addNotification = (id) => {
        console.log(id)
        const newNotification = {
            type:'INFO',
            message:id
            
          }
      //!isInCart(item.id) && setCart([...cart,{item,qty}])
      setNotifications([...notifications,newNotification])
    };

    const removeNotification = (itemId)=> {
      const newItems = notifications.filter((element) => element.item.id != itemId) 
      setNotifications(newItems)
       
    };

    const clear = () => {
        setNotifications([])
    };

   
   
  return (
    <NotificationContext.Provider value = {{notifications,addNotification,removeNotification,clear}}>
      {props.children}
    </NotificationContext.Provider>
  );
};