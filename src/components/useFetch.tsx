import { useState } from "react"
import {useEffect} from "react"

const employees = [
{
id: 1,
name: "John Smith",
age: 28,
department: "Engineering",
},
{
    id: 2,
name: "Sarah Johnson",
age: 32,
department: "Engineering",
},
];

// type Employee = {
//     id:  number;
//     name: string;
//     age: number;
//     department: string;
// }
function useFetch(name:string)
{
    const[data,setData]=useState(employees)

    useEffect(()=>{
        const result=employees.filter(e=>e.name.includes(name));
        setData(result)
    },[name])
    
    return data
}
export default useFetch;


