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
                     
        <Link to="/">
            <li>Inicio</li>
        </Link> 
        <Link to="">
            <li><CartWidget/></li>   
        </Link>             
                                
        </ul>
        
    </nav>
)
}

export default NavBar