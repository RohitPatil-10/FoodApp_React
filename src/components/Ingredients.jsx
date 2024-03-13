import Item from "./Item";

export default function Ingredients({FoodDetails,isLoading}){
    return(
        <div>
             {isLoading?"Loading......":FoodDetails.extendedIngredients.map((item)=>{
                   return <Item item={item}/>
                })}
        </div>
    )
}