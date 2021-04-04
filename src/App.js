import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from  './components/Navbar/NavBar';

function App() {
  const curso ='Coder House'
  return (
    <div className="mainApp">     
                
          <NavBar/>
          <ItemListContainer greeting= "I am the prop of the ItemListContainer component"/>

    </div>

 
  

  );
}

export default App;
