
import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
    

    const isInCart = (id) => {
    
       const itemFound = cart.some((element) => element.item.id ===id)
       console.log(itemFound)
       return (itemFound)
      
     };

    const addItem =({item,qty}) => {
        console.log(item.id)
        !isInCart(item.id) && setCart([...cart,{item,qty}])
        
    };

    const removeItem = (itemId)=> {
      const newItems = cart.filter((element) => element.item.id != itemId) 
      console.log('SOY EL ID RECIBIDO',itemId)
      setCart(newItems)
       
    };

    const clear = () => {
        setCart([])
    };

   
    const [cart,setCart] = useState([]);

  return (
    <CartContext.Provider value = {{cart,addItem,removeItem,clear}}>
      {props.children}
    </CartContext.Provider>
  );
};