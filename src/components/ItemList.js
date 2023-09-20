import { CDN_URL } from "../utils/constants";


const ItemList = ({items}) => {
    return (
        <div>
           
           {items.map((item)=> (
            <div key={item.card.info.id} className="p-2 m-2 border-b-[1px] border-gray-400 text-left flex justify-between items-center">
                
                <div className="w-10/12">
                <div className="py-2 text-sm font-medium">
                    <span>{item.card.info.name}</span>
                    <span> - ₹ {item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                </div>
                <p className="text-xs ">
                    {item.card.info.description}
                </p>
                </div>
                <div className="w-2/12">
                <div className="absolute">
                <button className="px-2  mt-[70px] ml-9 text-black bg-white shadow-lg rounded-md">Add +</button>
                </div>
                <img src={CDN_URL+item.card.info.imageId} className="w-full h-[95px]"/>
                </div>
            </div>
           ))}
        
        </div>
    )
}

export default ItemList;