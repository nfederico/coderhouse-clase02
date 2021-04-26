import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import NavBar from  './components/Navbar/NavBar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  
  return (
    <Router>
      <div className="mainApp"> 
      <NavBar />           
          <Switch >            
            <Route path="/" exact component={ItemListContainer} />
            <Route path="/category/:id" exact component={ItemListContainer} />
            <Route path="/item/:id" exact component={ItemDetailContainer} />          
            <Route path="/cart" exact component={Cart} />          

          </Switch> 
       
      </div>
    </Router>
 
  

  );
}

export default App;
