import Style from "./Container.module.css"
export default function Container({children}){
    return(
        <div className={Style.parentContainer}>{children}</div>
    )
}