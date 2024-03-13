import FoodItem from "./FoodItem"
export default function ListItems({FoodList,setFoodId}){
    return(
        <div>
            {FoodList.map((item)=>{
                return <FoodItem setFoodId={setFoodId} key={item.id} item={item}/>
            })}
        </div>
    )
}