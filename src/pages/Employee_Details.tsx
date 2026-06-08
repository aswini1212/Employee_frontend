import LabelGroup from "../components/label_group";
import editIcon from "../assets/edit_icon.png"
import "/employee_details.css"
import { useNavigate, useParams } from "react-router";
import { employees } from "../models/employees"

function EmployeeDetails(){
    const navigate=useNavigate()
    const{id}=useParams()
    const employee=employees.find((e)=>{return e.empid==Number(id)})
    if (!employee) 
    {
        return <h2>Employee not found</h2>;
    }
    function handleEdit()
    {
        navigate(`/employee/modify/${id}`)
    }

    return(
            <>
                <div className="head_div_details">
                    <h1>Employee Details</h1>
                </div>
                <div className="main_container">
                    <div className="sub_contain_one">
                        <LabelGroup headername="Employee Name" value={employee.empname}/>
                        <LabelGroup headername="Joining Date" value={employee.joiningdate}/>
                        <LabelGroup headername="Experience" value={employee.experience}/>
                        <LabelGroup headername="Role" value={employee.role}/>
                        <LabelGroup headername="Status" value={employee.status} idName={employee.status}/>
                        <LabelGroup headername="Experience" value={employee.experience}/>
                    </div>
                    <hr/>
                    <div className="sub_contain_two">
                        <div className="address_div">
                            <LabelGroup headername="Address" value={employee.address}/>
                        </div>
                        <LabelGroup headername="Employee ID Proof" value=""/>
                        <LabelGroup headername="Employee ID" value={employee.empid}/>
                    </div>
                </div>

                <button className="edit-emp-btn" onClick={handleEdit}>
                    <img src={editIcon} className="edit-icon" />
                    <span>Edit details</span>
                </button>
            </>
    
    )
}
export default EmployeeDetails