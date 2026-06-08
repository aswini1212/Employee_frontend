// import Login from './pages/Login_Page'
// import CreateEmployee from './pages/Create_Employee'
// import ChatBot from './pages/ChatBot'
// import EmployeeDetails from './pages/Employee_Details'
// import EmployeeList from './pages/Employee_List'

import { RouterProvider } from 'react-router'
import router from './routes/router'

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}


export default App
