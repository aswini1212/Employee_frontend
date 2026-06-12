import '/employee_details.css'
function LabelGroup({headername, value,idName}: {headername?: string, value?: string| number,idName?:string})
{
   
    return(
        <>
        <div className="label-group">
            <p className="p-one">{headername}</p>
            <p className="p-two" id={idName}>{value}</p>
        </div>
        </>
    )
}
export default LabelGroup