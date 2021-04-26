import {useParams} from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
    const {id} = useParams();
   
    return(
        <div className="container">
          <ItemList category={id}/>

        </div>
        
    )
}

export default ItemListContainer