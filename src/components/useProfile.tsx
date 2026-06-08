import { useParams, useSearchParams } from "react-router"

function UseProfile()
{
    
    const [searchparams]=useSearchParams()
    const filter_status = searchparams.get("filter") 
    const {id}= useParams()
    return(
        <div>
            <h1>{id}</h1>
            <h1>{filter_status}</h1>

        </div>
    )
}
export default UseProfile