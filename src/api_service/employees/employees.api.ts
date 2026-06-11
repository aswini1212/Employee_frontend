import employeeBaseApi from "../api";

export interface ResponseType{
    id:number
    name:string
    email:string
    age:string
    role: string
    created_at: Date
    status: string
    experience: string
    address:{
      line1:string;
      city: string;
      country: string;
      postalCode: string;
    }[];
}
export const employeeApi= employeeBaseApi.injectEndpoints({
    endpoints:(builder)=> ({
        getEmployees:builder.query<ResponseType[],void>({
            query:()=> "employee", //by default method in query is GET
            providesTags:["Employees"] //we are telling RTKQuery that the data belongs to Employees tags
        }),
        getEmployeesById: builder.query({
            query:(id)=>`employee/id/${id}`
        }),
        createEmployee: builder.mutation({
            query:(payload)=>({
            url: "/employee",
            method:"POST",
            body:payload,
            }),
            invalidatesTags:['Employees'],
        }),
        updateEmployee:builder.mutation({
            query:({id,...body})=>({
                url:`/employee/${id}`,
                method:"PUT",
                body,
            }),
            invalidatesTags:['Employees'],
        }),
        deleteEmployee: builder.mutation({
            query:(id)=>({
                url:`employee/${id}`,
                method:"DELETE",

            }),
            invalidatesTags:["Employees"],
        }),
        getEmployeesbyFilter:builder.query<ResponseType[],string>({
            query:(status)=> ({
                url: "employee/employee_name", 
                params:{status},
            })
            
        }),

    })
});
export const{useGetEmployeesQuery, useGetEmployeesByIdQuery,useCreateEmployeeMutation,useUpdateEmployeeMutation,useDeleteEmployeeMutation,useGetEmployeesbyFilterQuery}=employeeApi;
