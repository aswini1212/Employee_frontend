import '/create_employee.css'
import GroupImage from "../assets/Group.png"

function Aside()
{
    return(
        <aside>
            <div className="left-sidebar">
                <div className="sidebar-content">
                    <img src={GroupImage} className="employee_logo"/>
                    <p className="para_sidebar">Employee list</p>
                </div>
            </div>
        </aside>

        
    )
}
export default Aside