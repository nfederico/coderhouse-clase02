import companyLogo from '../../resources/logoAmericana.png';
import CartWidget from './CartWidget';

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
            <a href="#">Americana</a>
        <ul>        
                     
        <li><a href="#">Inicio</a></li>              
        <li><a href="#">Productos</a></li>            
        <li><a href="#"><CartWidget/> </a></li>   
                                
        </ul>
        
     </nav>
)
}

export default NavBar