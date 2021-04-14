import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import NavBar from  './components/Navbar/NavBar';


function App() {
  
  return (
    <div className="mainApp">     
                
          <NavBar/>
          
        
         <ItemDetailContainer />
          

    </div>

 
  

  );
}

export default App;
