import React, { useState, createContext,useContext } from 'react';
import {db} from '../database/firebase';
import { NotificationContext } from '../NotificationContext/NotificationContext';


export const CartContext = createContext();

export const CartProvider = (props) => {
  const userInfo = {
    name:"Ricardo Lorente",
    phone:"+549115275564",
    email:"ricardo.lorente@aol.com"
    } 
   const {addNotification} = useContext(NotificationContext)

   const addOrder =  async (cartItems) => {
    

      const newOrder = {
        buyer:userInfo,
        items:cartItems,
        date: new Date(),
        total: cart.reduce((accum,element) =>(accum +(element.item.price * element.qty)),0)
      }
      const {id} = await db.collection('orders').add(newOrder)
      console.log('Nueva orden ingresada' ,id) 
      addNotification(id)
      clear()
      //Add notification
                
     

   }
   
   


    const isInCart = (id) => {
    
       const itemFound = cart.some((element) => element.item.id ===id)
       return (itemFound)
      
     };

    const addItem =({item,qty}) => {
      !isInCart(item.id) && setCart([...cart,{item,qty}])
        
    };

    const removeItem = (itemId)=> {
      const newItems = cart.filter((element) => element.item.id != itemId) 
      setCart(newItems)
       
    };

    const clear = () => {
        setCart([])
    };

   
    const [cart,setCart] = useState([]);

  return (
    <CartContext.Provider value = {{cart,addItem,removeItem,clear,addOrder}}>
      {props.children}
    </CartContext.Provider>
  );
};