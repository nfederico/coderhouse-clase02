import {useParams} from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
    const {category} = useParams();
    return(
        <div className="container">
        <p>ListContainer</p>
        <ItemList category={category}/>

        </div>
        
    )
}

export default ItemListContainer