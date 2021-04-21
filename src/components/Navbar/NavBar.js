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
                     
        <Link exact to="/">
            <li>Inicio</li>
        </Link> 
        <Link exact to="category/libreria">
            <li>Cuadernos</li>
        </Link> 
        <Link exact to="category/otros">
            <li>Otros</li>
        </Link> 
        <Link exact to="cart">
            <li><CartWidget/></li>   
        </Link>             
                                
        </ul>
        
    </nav>
)
}

export default NavBar