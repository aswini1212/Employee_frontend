import CrossIcon from "../assets/cross_icon.png"
import DragDrop from "../assets/drag_drop_icon.png"
import UploadIcon from "../assets/upload_icon.png"
import "../../upload_box.css"
function UploadBox({onCancel}:{onCancel:()=>void})
{
    return(
        <div className="upload_box_main">
            <div className="upload_header">
                <p>Upload Proof</p>
                <img src={CrossIcon} className="cross_button"/>
            </div>

            <div className="drag-drop">
                <img src={DragDrop} className="drag_drop"/>
                <p className="para_up_one">Drag and Drop excel file here</p>
                <p className="para_up_two">Or</p>
                <div className="up_div">
                    <img src={UploadIcon}/>
                    <p>Upload file</p>
                </div>
                <div className="up_button_div">
                    <button className="up_cancel" onClick={(e)=>{ console.log("cancel clikced"); onCancel();}}>Cancel</button>
                    <button className="up_upload">Upload</button>
                </div>
            </div>
            
        </div>
    )
}
export default UploadBox;