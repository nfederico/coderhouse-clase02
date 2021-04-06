import './Styles.css';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({greeting}) => {
    return(
        <div className="greeting-container">
        <p>{greeting}</p>
        <ItemList/>

        </div>
        
    )
}

export default ItemListContainer