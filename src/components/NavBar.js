import companyLogo from '../resources/logoAmericana.png';

const NavBar = () => 
{
return (
    
    <nav>
        <ul>        
        <li>
            <img
                alt=""
                src= {companyLogo}
                width="30"
                height="35"
                className="logo"
            />
            <a href="#">Americana</a>
        </li>              
        <li><a href="#">Inicio</a></li>              
        <li><a href="#">Productos</a></li>            
        <li><a href="#">Carrito</a></li>                                       
        </ul>
    </nav>
)
}

export default NavBar