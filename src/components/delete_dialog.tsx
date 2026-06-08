import "../../delete_dialog.css"
function DeleteDialog({onCancel}:{onCancel:()=>void})
{
    
    return(
        <div className="delete_dialog" onClick={(e) => e.stopPropagation()}>
            <h3>Are you sure?</h3>
            <p>Do you really want to delete employee?</p>
            <div className="del_button_div">
                <button id="cancel_btn" onClick={(e)=>{e.stopPropagation(); console.log("cancel clikced"); onCancel();}}>
                    Cancel
                </button>
                <button id="confirm_btn">Confirm</button>
            </div>
        </div>
    )
}
export default DeleteDialog;