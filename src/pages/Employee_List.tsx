import EmpListHeader from "../components/emplist";
import EmpListHeaderContent from "../components/emplist-content";
import addIcon from "../assets/add_icon.png"
import { useNavigate } from "react-router";
import { employees } from "../models/employees"
import '/create_employee.css'


function EmployeeList(){
    const navigate=useNavigate()

    function handleCreate()
    {
        return(
            navigate("/employee/create")
        )
    }
    
    function handleClick(empid:number)
    {
       return  navigate(`/employee/${empid}`)
    }
      
    return(
        
        <>
                <div className="head_div_list">
                    <h1>Employee List</h1>
                </div>
                <EmpListHeader />
                {employees.map((e) => { return( <EmpListHeaderContent employee={e} onClick={()=>handleClick(e.empid)}/>);})}

                <div className="header-sel-ele">
                        <p className="filter-text">Filter By</p>
                        <select defaultValue="" className="status-dropdown">
                            <option value="" disabled>Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="probation">Probation</option>
                        </select>
                        <button className="add-emp-btn" onClick={handleCreate}>
                            <img src={addIcon} className="add-icon" />
                            <span>Create Employee</span>
                        </button>
                </div>

            </>
    )
    
}
export default EmployeeList