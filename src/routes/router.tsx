import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login_Page'
import CreateEmployee from '../pages/Create_Employee';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound'
import ErrorPage from '../pages/ErrorPage';
import EmployeeList from '../pages/Employee_List';
import ProtectedRoute from '../components/ProtectedRoute'
import UseProfile from '../components/useProfile';
import EmployeeDetails from '../pages/Employee_Details';

const router= createBrowserRouter(
  [
    {
      path:"/login",
      element:<Login/>,
      errorElement:<ErrorPage/>
    },
    {
        path:"/employee",
        element:<ProtectedRoute/>,
        children:[
            {
                element: <Layout/>,
                children:[
                    {index:true, element:<EmployeeList/>},
                    {path:"create",element:<CreateEmployee/>},
                    {path:"list",element:<EmployeeList/>},
                    {path:":id",element:<EmployeeDetails/>},
                    {path:"modify/:id",element:<CreateEmployee/>}
                ]
            }
            
        ]
    },

    {
        path:"user/:id",
        element: <UseProfile/>
    },
    {
        path:"*",
        element:<NotFound/>
    },

    
  ]
);
export default router;