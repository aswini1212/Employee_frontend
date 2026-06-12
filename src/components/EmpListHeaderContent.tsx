import "/employee_list.css"
import DeleteIcon from "../assets/delete_icon.png"
import ModifyIcon from "../assets/pencil_icon.png"
import { useState } from "react";
import DeleteDialog from "./DeleteDialog";
import { useNavigate } from "react-router-dom";
import type {ResponseType} from "../api_service/employees/employees.api"

function EmpListHeaderContent({employee, onClick}:{employee:ResponseType, onClick: (id: number) => void})
{
    const navigate=useNavigate()
    //CONVERTING DATE TO NORMAL FORMAT
    const d=new Date(employee.created_at)
    //STATE FOR DIALOGBOX
    const[deleteDialog,setDeleteDialog]=useState(false)
    

    function handleDelete(e:React.MouseEvent)
    {
        e.stopPropagation();
        setDeleteDialog((deleteDialog) => !deleteDialog);
    }

    function handleModify(e:React.MouseEvent)
    {
        e.stopPropagation();
        return(
            navigate(`/employee/modify/${employee.id}`)
        )
    }
    return(
        <div className="emp-list-head-content" onClick={() => onClick(employee.id)}>
            <div className="emp-list-head-item-content">{employee.name}</div>
            <div className="emp-list-head-item-content">{employee.id}</div>
            <div className="emp-list-head-item-content">{d.toLocaleDateString()}</div>
            <div className="emp-list-head-item-content">{employee.role}</div>
            <div className="emp-list-head-item-content">
                <span className={employee.status}>{employee.status}</span>
            </div>
            <div className="emp-list-head-item-content">{employee.experience} Years</div>
            <div className="delete-modify-btn">
                <button className="delete-btn" onClick={handleDelete}><img src={DeleteIcon} className="delete-icon" /></button>
                <button className="modify-btn" onClick={handleModify}><img src={ModifyIcon} className="modify-icon" /></button>
            </div>

            {/* //CONDITIONAL RENDERING */}
            {deleteDialog && <div className="overlay"><DeleteDialog onCancel={() => setDeleteDialog(false)} onConfirmDelete={() => setDeleteDialog(false)} id={employee.id}/></div>} 
        </div>
    )
}
export default EmpListHeaderContent;