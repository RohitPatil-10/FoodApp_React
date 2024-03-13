import Style from "./FoodItem.module.css"
export default function FoodItem({item,setFoodId}){
    return(
        <div className={Style.foodItem}>
            <img className={Style.image} src={item.image} alt="Image Not Found" />
            <h1>{item.title}</h1>
            <button onClick={()=>{
                setFoodId(item.id)
            }} className={Style.button}>View Recipe</button>
        </div>
    )
}