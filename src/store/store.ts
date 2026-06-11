import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employee/employeeReducer";
import { useDispatch, useSelector } from "react-redux";
import employeeBaseApi from "../api_service/api"

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    [employeeBaseApi.reducerPath]: employeeBaseApi.reducer
  },
   middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(employeeBaseApi.middleware)
})
  
export default store;
 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
 
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = useSelector<RootState, any>