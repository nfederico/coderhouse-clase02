import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from  './components/Navbar/NavBar';


function App() {
  
  return (
    <div className="mainApp">     
                
          <NavBar/>
          
         <ItemListContainer greeting= "List of items"/> 
         
          

    </div>

 
  

  );
}

export default App;
