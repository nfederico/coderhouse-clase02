import companyLogo from '../../resources/logoAmericana.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => 
{
return (
    
    <nav>
        
        <img
                alt=""
                src= {companyLogo}
                width="30"
                height="75"
                className="logo"
            />
            <Link to="/">AMERICANA </Link>
        <ul>        
                     
        <Link exact to="/" style={{ textDecoration: 'none'}}>
            <li>Inicio</li>
        </Link> 
        <Link exact to="/category/libreria"style={{ textDecoration: 'none'}}>
            <li>Cuadernos</li>
        </Link> 
        <Link exact to="/category/otros" style={{ textDecoration: 'none'}}>
            <li>Otros</li>
        </Link> 
        <Link exact to="/cart" style={{ textDecoration: 'none'}}>
            <li><CartWidget/></li>   
        </Link>             
                                
        </ul>
        
    </nav>
)
}

export default NavBar