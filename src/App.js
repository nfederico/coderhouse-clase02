import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Order from './components/Order/Order';

import { CartProvider } from './CartContext/CartContext';
import { NotificationProvider } from './NotificationContext/NotificationContext';
import NavBar from  './components/Navbar/NavBar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  
  return (
    <NotificationProvider>
     <CartProvider>
      <Router>
            <div className="mainApp"> 
              <NavBar />           
              <Switch >            
                <Route path="/" exact component={ItemListContainer} />
                <Route path="/category/:id" exact component={ItemListContainer} />
                <Route path="/item/:id" exact component={ItemDetailContainer} />          
                <Route path="/cart" exact component={Cart} />    
                <Route path="/order" exact component={Order} />          

              </Switch> 
            </div>
      </Router>
     </CartProvider>
    </NotificationProvider>
  

  );
}

export default App;
