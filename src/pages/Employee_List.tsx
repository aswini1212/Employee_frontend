import EmpListHeader from "../components/emplist";
import EmpListHeaderContent from "../components/emplist-content";
import addIcon from "../assets/add_icon.png"
import { useNavigate } from "react-router";
import { useState } from "react";
import { useGetEmployeesbyFilterQuery, useGetEmployeesQuery } from "../api_service/employees/employees.api";
import '/create_employee.css'


function EmployeeList(){

    const navigate=useNavigate()


    //HOOK FOR GETTING ALL THE EMPLOYEES
    const{data: employees}= useGetEmployeesQuery()

    //HOOK FOR GETTING THE EMPLOYEES ACCORDING TO THE STATUS
    const[selectedStatus,setSelectedStatus]=useState("")
    const{data:filteredemployees}=useGetEmployeesbyFilterQuery(selectedStatus,{skip:!selectedStatus})

    const EmployeestoShow= selectedStatus===""?employees:filteredemployees

    function handleCreate()
    {
        return(
            navigate("/employee/create")
        )
    }
    
    function handleClick(id:number)
    {

       return  navigate(`/employee/${id}`)
    }
      
    return(
        
        <>
                <div className="head_div_list">
                    <h1>Employee List</h1>
                </div>
                <EmpListHeader />
                {EmployeestoShow?.map((e) => { return( <EmpListHeaderContent key={e.id} employee={e} onClick={()=>handleClick(e.id)}/>);})}

                <div className="header-sel-ele">
                        <p className="filter-text">Filter By</p>
                        <select value={selectedStatus} className="status-dropdown" onChange={(e)=>{setSelectedStatus(e.target.value)}}>
                            <option value="">Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Probation">Probation</option>
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