import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from  './components/Navbar/NavBar';


function App() {
  
  return (
    <div className="mainApp">     
                
          <NavBar/>
          <ItemListContainer greeting= "I am the prop of the ItemListContainer component"/>
          <ItemCount stock={5} initial={1}/>

    </div>

 
  

  );
}

export default App;
