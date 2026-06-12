import "../../delete_dialog.css"
import { useDeleteEmployeeMutation } from "../api_service/employees/employees.api";
import { useEffect } from "react";

function DeleteDialog({onCancel,onConfirmDelete,id}:{onCancel:()=>void,onConfirmDelete:()=>void,id:number})
{
    const [deleteEmployee, {data,isSuccess}] = useDeleteEmployeeMutation();
    
    useEffect(()=>{
        if(isSuccess)
        {
            onConfirmDelete();
        }
    },[isSuccess])
    
    async function handleConfirm()
    {
        await deleteEmployee(id);

    }
  
    return(
        <div className="delete_dialog" onClick={(e) => e.stopPropagation()}>
            <h3>Are you sure?</h3>
            <p>Do you really want to delete employee?</p>
            <div className="del_button_div">
                <button id="cancel_btn" name="cancel" onClick={(e)=>{e.stopPropagation(); console.log("cancel clikced"); onCancel();}}>
                    Cancel
                </button>
                <button id="confirm_btn" name="confirm" onClick={handleConfirm}>Confirm</button>
            </div>
        </div>
    )
}
export default DeleteDialog;