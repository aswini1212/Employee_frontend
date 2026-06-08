function Input(props: { type:string, name:string, placeholder?:string,className?: string, id?: string, list?:string, defaultValue?:string})
{
    return (
         <input type={props.type} name={props.name} placeholder={props.placeholder} className={props.className} id={props.id} list={props.list} defaultValue={props.defaultValue}required />
    )
}
export default Input