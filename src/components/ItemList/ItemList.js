import Item from '../Item/Item';
import itemsMocked from '../../data/data';

const ItemList = () =>{
    return (
        <ul>
            {
            itemsMocked.map((item)=>(
                    <li key= {item.id}> 
                        <Item title = {item.title} price = {item.price} pictureUrl={item.pictureUrl}/> 
                    </li>))
            } 
        </ul>
       
    )
}

export default ItemList