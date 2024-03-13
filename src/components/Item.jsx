import Style from "./Item.module.css"
export default function Item({item}){
    return(
        <div className={Style.itemContainer}>
            <div className={Style.imageContainer}>
                <img className={Style.image} src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`} alt="" />
            </div>
            <div className={Style.nameContainer}>
                <div className={Style.name}>{item.name}</div>
                <div className={Style.amount}>{item.amount} {item.unit}</div>
            </div>
        </div>
    )
}