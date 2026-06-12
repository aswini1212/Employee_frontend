import Group from '../components/Group'
import Input from '../components/Input'
import Label from '../components/Label'
import attachIcon from "../assets/attach_icon.png"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import '/create_employee.css'
import { useEffect, useState } from 'react'
import UploadBox from '../components/UploadBox'
import { useCreateEmployeeMutation, useGetEmployeesByIdQuery, useUpdateEmployeeMutation } from '../api_service/employees/employees.api'

// enum ROLES {
//         'UI',
//         'UX',
//         'Developer',
//         'HR'
// }
// enum STATUS{
//     'Active',
//     'Inactive',
//     'Probation'
// }
    
function CreateEmployee()
{
    
    const navigate=useNavigate();
    
    // MODIFYING THE HEADER ACCORDING TO PATHNAME
    const location =useLocation()
    const path=location.pathname
    const heading= path==="/employee/create"? "Create Employee":"Modify Employee";
    const button= path==="/employee/create"? "Create":"Modify";

    // GETTING THE ID FROM THE PATH AND FETCHING THE EMPLOYEE
    const{id}=useParams()
    const{data:employee}=useGetEmployeesByIdQuery(id!,{skip:!id,})
    
    //HOOK FOR UPDATING EMPLOYEE
    const [updateEmployee,{isSuccess}] =  useUpdateEmployeeMutation();

    //HOOK FOR CREATING EMPLOYEE
    const [createEmployee] =  useCreateEmployeeMutation();

    //STATE TO DISPLAY THE UPLOAD BOX
    const[uploadbox,setUploadBox]=useState(false)

    // VALIDATING THE FORM--UNCONTROLLED
async function onSubmit(e: React.SubmitEvent<HTMLFormElement>)
    {
        e.preventDefault();
        const data=new FormData(e.target);

        const name=data.get("name")?.toString() || "";
        const email=data.get("email")?.toString() || "";
        const password=data.get("password")?.toString() || "";
        const role=data.get("role")?.toString()||"";
        const line1=data.get("address")?.toString()||"";
        const city=data.get("city")?.toString()||"";
        const country=data.get("country")?.toString()||"";
        const postal_code=data.get("postal_code")?.toString() || "";
        const experience=Number(data.get("experience"));
        const age=Number(data.get("age") );
        const status=data.get("status")?.toString()||"";
        

        if(name=="")
        {
            alert("Name field should not be empty")
            return;
        }
        if(!email.includes("@"))
        {
            alert("Email should contain @")
            return;
        }
        if(postal_code.length!==6)
        {
            alert("Postal Code should have 6 elements")
            return;
        }
        if(password.length<8)
        {
            alert("Password must be greater than 8 characters")
            return;
        }

        if(path==="/employee/create")
        {
            const employee=ConvertToObject(name,email,password,role,line1,city,country,postal_code,status,experience,age)
            console.log(employee)
            createEmployee(
                employee
            ).unwrap().then(() => {
                navigate("/employee/list");
                }).catch((error) => {
                console.log(error);
                });;
        }
        else{
           
            await updateEmployee({
                    id:Number(id),
                    name:name,
                    email:email,
                    age:age,
                    password:password ,
                    experience:experience,
                    status:status,
                    role:role,
                    addresses:[{
                        line1:line1,
                        city:city,
                        country:country,
                        postal_code:postal_code
                    }]

            }).unwrap().then(()=>{navigate("/employee/list")})
           
         }

              
    }
    
    function ConvertToObject(name:string,email:string,password:string,role:string,line1:string,city:string,country:string,postal_code:string,status:string,experience:number,age:number)
    {
        return(
            {
                name:name,
                age:age,
                role:role,
                email:email,
                experience:experience,
                status:status,
                password:password,
                addresses:[{
                    line1:line1,
                    city:city,
                    country:country,
                    postal_code:postal_code}]
            }

        )
    }
    
    function handleUpload()
    {
        setUploadBox((uploadbox)=>!uploadbox)
    }

    return(
        <>
                <div className="head_div">
                        <h1>{heading}</h1>
                </div>
        
                <div className="form_div">
                    <form onSubmit={onSubmit} noValidate>

                        {/* first input row */}
                        <div className="input_row">
                            <Group htmlFor="name" value="Name" type="text" name="name" placeholder="Name" defaultValue={employee?.name}/>
                            <Group htmlFor="email" value="Email" type="email" name="email" placeholder="Email" defaultValue={employee?.email}/>
                            <Group htmlFor="Age" value="Age" type="text" name="age" placeholder="Age" defaultValue={employee?.age}/> 
                        </div>

                        {/* second input row */}
                        <div className="input_row">
                            <div className="group1">
                                <Label htmlFor="role" value="Role:"/>
                                <select id="roles" defaultValue={employee?.role} name="role">
                                    <option >UI</option>
                                    <option >UX</option>
                                    <option >HR</option>
                                    <option >Developer</option>
                                </select>
                            </div>
                            
                            <div className="group1">
                                <Label htmlFor="status" value="Status:"/>
                                <select id="statuses" defaultValue={employee?.status} name="status">
                                    <option>Active</option>
                                    <option >Inactive</option>
                                    <option>Probation</option>
                                </select>
                            </div>

                            <Group htmlFor="password" value="Password" type="Password" name="password" placeholder="Password" defaultValue={employee?.password}/>
                        </div>

                        {/* third input row */}
                        <div className="input_row">
                            <div className="address">
                                <Label htmlFor="address" value="Address"/>
                                <Input type="text" id="address_input" name="address" placeholder="Address" defaultValue={employee?.addresses[0]?.line1}/>

                                <div className="city_con">
                                    <Input type="text" id="city" name="city" placeholder="City"defaultValue={employee?.addresses[0]?.city}/>
                                    <Input type="text" id="country" name="country" placeholder="Country" defaultValue={employee?.addresses[0]?.country}/>
                                </div> 

                                <Input type="text" id="postal_code" name="postal_code" placeholder="Postal Code" defaultValue={employee?.addresses[0]?.postal_code}/>
                            </div>

                            <div className="uploadid">
                                <Label htmlFor="uploadid" value="Upload ID Proof"/>
                                {/* <Input type="file" id="uploadid" name="uploadid" className="upload_input" placeholder="Attach Files"/> */}
                                <div className="id_div" onClick={handleUpload}><img src={attachIcon}/>Attach Files</div>
                            </div>
                            <div className="experience">
                                <Label htmlFor="Experience" value="Experience"/>
                                <Input type="text" id="experience" name="experience" placeholder="Experience" defaultValue={employee?.experience}/>
                            </div>
                            

                        </div>

                        <div className="button_div">
                            <button type="submit"  id="create" >{button}</button>
                            <button type="button" id="cancel" onClick={() => navigate(-1)}>Cancel</button>  
                        </div>  
                        {uploadbox && <div className="overlay"><UploadBox onCancel={() => setUploadBox(false)}/></div>}
                    </form>
                </div>
                </>
    )

}
export default CreateEmployee