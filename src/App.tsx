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
import store from './store/store';
import {Provider} from "react-redux";

// const Page = React.lazy(() => import('./pages/Login_Page'));

function App() {
  return (
    // <ErrorBoundary>
    //   <Suspense fallback={<Loading/>}>
    <div className="App">
      <Provider store={store}>
       <RouterProvider router={router}/>
      </Provider>
      
    </div>
    // </Suspense>
    // </ErrorBoundary>
    
  )
}


export default App
