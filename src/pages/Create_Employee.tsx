import Button from '../components/button'
import Group from '../components/group'
import Input from '../components/input'
import Label from '../components/label'
import attachIcon from "../assets/attach_icon.png"
import { useLocation, useParams } from 'react-router-dom'
import { employees } from "../models/employees"
import '/create_employee.css'
import { useState } from 'react'
import UploadBox from '../components/upload_box'


function CreateEmployee()
{
    // MODIFYING THE HEADER ACCORDING TO PATHNAME
    const location =useLocation()
    const path=location.pathname
    const heading= path==="/employee/create"? "Create Employee":"Modify Employee";

    // GETTING THE ID FROM THE PATH AND FETCHING THE EMPLOYEE
    const{id}=useParams()
    const employee=employees.find((e)=>{return e.empid==Number(id)})
    const name= path==="/employee/create"? "":employee?.empname || ""
    const email= path==="/employee/create"? "":employee?.email || ""
    const phone= path==="/employee/create"? "":employee?.phone || ""
    const department= path==="/employee/create"? "":employee?.department || ""
    const address= path==="/employee/create"? "":employee?.address || ""
    const city= path==="/employee/create"? "":employee?.city || ""
    const country= path==="/employee/create"? "":employee?.country || ""
    const postal_code= path==="/employee/create"? "":employee?.postalCode || ""
    const role= path==="/employee/create"? "":employee?.role || ""
    const status= path==="/employee/create"? "":employee?.status|| ""

    //To DISPLAY THE UPLOAD BOX
    const[uploadbox,setUploadBox]=useState(false)


    // VALIDATING THE FORM--UNCONTROLLED
    function onSubmit(e: React.SubmitEvent<HTMLFormElement>)
    {
        e.preventDefault();
        const data=new FormData(e.target);

        const name=data.get("name")?.toString() || "";
        const email=data.get("email")?.toString() || "";
        const phone=data.get("phone")?.toString() || "";
        const postal_code=data.get("postal_code")?.toString() || "";

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
        if(phone.length<10)
        {
            alert("Phone number should be of 10 digits")
            return;
        }
        if(postal_code.length!==6)
        {
            alert("Postal Code should have 6 elements")
            return;
        }
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
                            <Group htmlFor="name" value="Name" type="text" name="name" placeholder="Name" defaultValue={name}/>
                            <Group htmlFor="email" value="Email" type="email" name="email" placeholder="Email" defaultValue={email}/>
                            <Group htmlFor="phone" value="Phone" type="tel" name="phone" placeholder="Phone" defaultValue={phone}/> 
                        </div>

                        {/* second input row */}
                        <div className="input_row">
                            <div className="group1">
                                <Label htmlFor="role" value="Role:"/>
                                <select id="roles" defaultValue={role} >
                                    <option >Software Engineer</option>
                                    <option >Product Manager</option>
                                    <option >Designer</option>
                                </select>
                            </div>
                            
                            <div className="group1">
                                <Label htmlFor="status" value="Status:"/>
                                <select id="statuses" defaultValue={status}>
                                    <option>Active</option>
                                    <option >Inactive</option>
                                    <option>Probation</option>
                                </select>
                            </div>

                            <Group htmlFor="department" value="Department" type="text" name="department" placeholder="Department" defaultValue={department}/>
                        </div>

                        {/* third input row */}
                        <div className="input_row">
                            <div className="address">
                                <Label htmlFor="address" value="Address"/>
                                <Input type="text" id="address_input" name="address" placeholder="Address" defaultValue={address}/>

                                <div className="city_con">
                                    <Input type="text" id="city" name="city" placeholder="City"defaultValue={city}/>
                                    <Input type="text" id="country" name="country" placeholder="Country" defaultValue={country}/>
                                </div> 

                                <Input type="text" id="postal_code" name="postal_code" placeholder="Postal Code" defaultValue={postal_code}/>
                            </div>

                            <div className="uploadid">
                                <Label htmlFor="uploadid" value="Upload ID Proof"/>
                                {/* <Input type="file" id="uploadid" name="uploadid" className="upload_input" placeholder="Attach Files"/> */}
                                <div className="id_div" onClick={handleUpload}><img src={attachIcon}/>Attach Files</div>
                            </div>
                        </div>

                        <div className="button_div">
                            <Button type="submit" label="CreateEmployee" id="create"/>
                            <Button type="button" label="Cancel" id="cancel"/>  
                        </div>  
                        {uploadbox && <UploadBox onCancel={() => setUploadBox(false)}/>}
                    </form>
                </div>
                </>
    )

}
export default CreateEmployee