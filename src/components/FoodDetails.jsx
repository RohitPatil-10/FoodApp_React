import { useEffect, useState } from "react"
import Style from "./FoodDetails.module.css"
import Ingredients from "./Ingredients"

export default function FoodDetails({FoodId}){
    const [FoodDetails,setFoodDetails]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    const URL=`https://api.spoonacular.com/recipes/${FoodId}/information`;
    const API_KEY="e1f07a3d730243aa902c48e1439701ed";
    useEffect(()=>{
        async function getDetails(){
            const resp=await fetch(`${URL}?apiKey=${API_KEY}`)
            const details=await resp.json();
            // console.log(details.title)
            setFoodDetails(details)
            setIsLoading(false)
        }
        getDetails();
    },[FoodId])
    return(
        <div>
            <div  className={Style.recipeCard}>
                <h1 className={Style.recipeName}>{FoodDetails.title}</h1>
                <img className={Style.recipeImage} src={FoodDetails.image} alt="" />
            <div className={Style.recipeDetails}>
                <span><strong>⌚ {FoodDetails.readyInMinutes} Minutes</strong></span>
                <span><strong>Serves {FoodDetails.servings}</strong></span>
                <span><strong>{FoodDetails.vegitarian ? "🥕 Vegitarian":"🍗 Non-Vegitarian"}</strong></span>
                <span><strong>{FoodDetails.vegan ? "🐮 Vegan":""}</strong></span>
            </div>
            <div>
                <span><strong>💲{FoodDetails.pricePerServing /100} Per Serving</strong></span>
            </div>
            <div className={Style.infoBox}>
                <h1>Ingredients</h1>
               <Ingredients isLoading={isLoading} FoodDetails={FoodDetails}/>
            </div>
            <div className={Style.infoBox}>
                <h1>Instruction</h1>
                <div className={Style.recipeInstructions}>
                <ol>
                    {/* {console.log(FoodDetails.analyzedInstructions)} */}
                {isLoading?<h1>Loading.....</h1>:FoodDetails.analyzedInstructions[0].steps.map((step)=>{
                    return <li key={step.number}>{step.step}</li>
                })}
                </ol>
            </div>
            </div>
            </div>
        </div>
    )
}