function Button(props:{type:"submit" | "reset" | "button" | undefined, label?:string, id?: string })
{
    
    return(

        <button type={props.type} id={props.id}>{props.label}</button>
    )

}
export default Button