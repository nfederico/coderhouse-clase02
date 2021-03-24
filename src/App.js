
import './App.css';

function App() {
  const curso ='Coder House'
  return (
    <div className="App">
     
          <h1>Aprendiendo React con {curso} - Escribiendo JSX</h1>
          <nav>
            <ul>
              <li><a href="#">Inicio</a></li>              
              <li><a href="#">Productos</a></li>
              <li><a href="#">Carrito</a></li>                                       
            </ul>
          </nav>
          

    </div>
  );
}

export default App;
