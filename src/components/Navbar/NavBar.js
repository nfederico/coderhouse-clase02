import companyLogo from '../../resources/logoAmericana.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => 
{
return (
    <div className="navbar-container">
        <Link to="/">
            <img
                    alt="Americana Logo"
                    src= {companyLogo}
                    className="logo"
                />
        </Link>

        <input type= "checkbox" id="nav-toggle" className="nav-toggle"/> 

        <nav>
                
            <ul>       
                        
                <Link  to="/" style={{ textDecoration: 'none'}}>
                    <li>Inicio</li>
                </Link> 
                <Link to="/category/libreria"style={{ textDecoration: 'none'}}>
                    <li>Cuadernos</li>
                </Link> 
                <Link to="/category/otros" style={{ textDecoration: 'none'}}>
                    <li>Otros</li>
                </Link> 
                <Link to="/cart" style={{ textDecoration: 'none'}}>
                    <li><CartWidget/></li>   
                </Link>             
                                    
            </ul>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span>|||</span>
        </label>
    
    </div>
    
)
}

export default NavBar