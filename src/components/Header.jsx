import Style from "./Header.module.css"
export default function Header(){
    return(
        <div className={Style.header}>
            <h1 className={Style.text}>🍔Food App</h1>
        </div>
    )
}