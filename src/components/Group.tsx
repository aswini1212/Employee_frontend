import Label from "./Label";

function Group(props:{htmlFor:string, value:string, type:string, name:string, placeholder:string,defaultValue?:string})
{
    return(
            <div className="group1" data-testid={"group"}>
                <Label htmlFor={props.htmlFor} value={props.value}/>
                <input type={props.type} id={props.htmlFor} name={props.name} placeholder={props.placeholder} defaultValue={props.defaultValue}/>
            </div>
    )
}
export default Group



