import { employees, type EmployeeInteface } from "../../models/employees";
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';


export interface EmployeeState
{
    employees:EmployeeInteface[],
}
 
const initialState: EmployeeState ={
    employees: employees,
}
 
export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<EmployeeInteface>) => {
      state.employees.push(action.payload);
      console.log(state.employees)
    },
  },
});
 
export const {addEmployee} = employeeSlice.actions
export default employeeSlice.reducer;
