import Style from "./InnerContainer.module.css"
export default function InnerContainer({children}){
    return(
        <div className={Style.childContainer}>{children}</div>
    )
}
