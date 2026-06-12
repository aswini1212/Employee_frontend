import CrossIcon from "../assets/cross_icon.png"
import DragDrop from "../assets/drag_drop_icon.png"
import UploadIcon from "../assets/upload_icon.png"
import "../../upload_box.css"
import { useState } from "react"
function UploadBox({onCancel}:{onCancel:()=>void})
{
    const[fileName,setFileName]=useState("")
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
                    <input type="file" id="uploadid" name="uploadid" className="upload_input" placeholder="Attach Files" onChange={(e)=>{if(e.target.files?.[0]){setFileName(e.target.files[0].name)}}}/>
                    <img src={UploadIcon}/>
                    <p>{fileName || "Upload file"}</p>
                </div>
            </div>
                <div className="up_button_div">
                    <button className="up_cancel" onClick={(e)=>{ console.log("cancel clikced"); onCancel();}}>Cancel</button>
                    <button className="up_upload">Upload</button>
                </div>
            
            
        </div>
    )
}
export default UploadBox;