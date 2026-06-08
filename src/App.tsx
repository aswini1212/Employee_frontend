// import Login from './pages/Login_Page'
// import CreateEmployee from './pages/Create_Employee'
// import ChatBot from './pages/ChatBot'
// import EmployeeDetails from './pages/Employee_Details'
// import EmployeeList from './pages/Employee_List'

import { RouterProvider } from 'react-router'
import router from './routes/router'
import { Suspense } from 'react'
import Loading from './components/loading'
import React from 'react';
import Login from './pages/Login_Page';
import ErrorBoundary from './components/error_boundary';

// const Page = React.lazy(() => import('./pages/Login_Page'));

function App() {
  return (
    // <ErrorBoundary>
    //   <Suspense fallback={<Loading/>}>
    <div className="App">
      <RouterProvider router={router}/>
    </div>
    // </Suspense>
    // </ErrorBoundary>
    
  )
}


export default App
