function Label(props:{htmlFor:string, value:string,defaultValue?:string})
{
    return (
        <label htmlFor={props.htmlFor} defaultValue={props.defaultValue}>{props.value}</label>
    )
}
export default Label