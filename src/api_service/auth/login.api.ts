	
import employeeBaseApi from "../api"

export interface LoginResponse{
    access_token:string
    refresh_token: string
    token_type: string 
}

export interface LoginPayload{
    username: string
    password: string

}
export const loginApi = employeeBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({ 
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload
      }),
    }),
  }),
});
 
export const { useLoginMutation } = loginApi;