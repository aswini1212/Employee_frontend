import LabelGroup from "../components/label_group";
import editIcon from "../assets/edit_icon.png"
import "/employee_details.css"
import { useNavigate, useParams } from "react-router";
import { useGetEmployeesByIdQuery } from "../api_service/employees/employees.api";

function EmployeeDetails(){
    const navigate=useNavigate()

    //GETTING AN EMPLOYEE BY ID
    const{id}=useParams()
    const{data:employee}=useGetEmployeesByIdQuery(id)

     const d=new Date(employee?.created_at)
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
                        <LabelGroup headername="Employee Name" value={employee?.name}/>
                        <LabelGroup headername="Joining Date" value={d.toLocaleDateString()}/>
                        <LabelGroup headername="Role" value={employee?.role}/>
                        <LabelGroup headername="Status" value={employee?.status} idName={employee?.status}/>
                        <LabelGroup headername="Experience" value={employee?.experience}/>
                    </div>
                    <hr/>
                    <div className="sub_contain_two">
                        <div className="address_div">
                            <p className="p-one">Address</p>
                            <p className="p-two">{employee?.addresses?.[0]?.line1}</p>
                            <p className="p-two">{employee?.addresses?.[0]?.city} {employee?.addresses?.[0]?.postal_code}</p>
                            <p className="p-two">{employee?.addresses?.[0]?.country}</p>
                        </div>
                        <LabelGroup headername="Employee ID Proof" value=""/>
                        <LabelGroup headername="Employee ID" value={employee.id}/>
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