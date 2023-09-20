
import ItemList from "./ItemList";


const RestaurantCategory = ({data,showItems,setShowIndex}) =>{
    const handleClick =() =>{
        setShowIndex();
    }
    return (
        <div>
        <div className="w-1/2 p-4 mx-auto my-4 shadow-lg bg-gray-50">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="text-lg font-bold">{data.title} ({data?.itemCards.length})</span>
            <span>{showItems?"🔼":"🔽"}</span>
            </div>
            {showItems&&<ItemList items = {data?.itemCards}/>}
        </div>
        
        </div>
    );
};

export default RestaurantCategory;