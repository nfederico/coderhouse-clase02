import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({id}) => {
    return(
        <div className="container">
        <p>ListContainer{id}</p>
        <ItemList/>

        </div>
        
    )
}

export default ItemListContainer