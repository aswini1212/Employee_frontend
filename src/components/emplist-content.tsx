import "/employee_list.css"
import DeleteIcon from "../assets/delete_icon.png"
import ModifyIcon from "../assets/pencil_icon.png"
import type { EmployeeInteface } from "../models/employees";
import { useState } from "react";
import DeleteDialog from "./delete_dialog";
import { useNavigate } from "react-router-dom";

function EmpListHeaderContent({employee, onClick}:{employee:EmployeeInteface, onClick: (id: number) => void})
{
    const[deleteDialog,setDeleteDialog]=useState(false)
    const navigate=useNavigate()

    function handleDelete(e:React.MouseEvent)
    {
        e.stopPropagation();
        setDeleteDialog((deleteDialog) => !deleteDialog);
    }

    function handleModify(e:React.MouseEvent)
    {
        e.stopPropagation();
        return(
            navigate(`/employee/modify/${employee.empid}`)
        )
    }
    return(
        <div className="emp-list-head-content" onClick={() => onClick(employee.empid)}>
            <div className="emp-list-head-item-content">{employee.empname}</div>
            <div className="emp-list-head-item-content">{employee.empid}</div>
            <div className="emp-list-head-item-content">{employee.joiningdate}</div>
            <div className="emp-list-head-item-content">{employee.role}</div>
            <div className="emp-list-head-item-content">
                <span className={employee.className}>{employee.status}</span>
            </div>
            <div className="emp-list-head-item-content">{employee.experience} Years</div>
            <div className="delete-modify-btn">
                <button className="delete-btn" onClick={handleDelete}><img src={DeleteIcon} className="delete-icon" /></button>
                <button className="modify-btn" onClick={handleModify}><img src={ModifyIcon} className="modify-icon" /></button>
            </div>

            {/* //CONDITIONAL RENDERING */}
            {deleteDialog && <DeleteDialog onCancel={() => setDeleteDialog(false)} />} 
        </div>
    )
}
export default EmpListHeaderContent;