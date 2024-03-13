import {useState} from "react";
import { useEffect } from "react";
import Style from "./Search.module.css"

const URL="https://api.spoonacular.com/recipes/complexSearch";
const API_KEY="e1f07a3d730243aa902c48e1439701ed";

export default function Header({FoodList,setFoodList}){
    const [query,setQuery]=useState("pizza")
    //This useEffect hook is use to change anything when state changes specially used for making API calls--------- syntax: useEffect contain callback function which execute ehen page load and when ever state changes which are provided in next parameter which is array of states................
    useEffect(()=>{
        //This function will execute for 1st time when page load after that will load everytime when state change
        async function fetchFood(){

            const response=await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data=await response.json()
            setFoodList(data.results);
        }
        fetchFood();
        
    }, [query])
    return(
        <div className={Style.search}>
            <h2 className={Style.heading}>Enter Your Dish Name : </h2>
            <input className={Style.input} type="text"  value={query} onChange={(e)=>{
                setQuery(e.target.value)
            }}/>
        </div>
    )
}