import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
     {
          path:'/',
          element: <Home></Home>
     },
     {
          path: '/registration',
          element: <Registration></Registration>
     },
     {
          path: '/login',
          element: <Login></Login>
     },
     {
          path: '/signup',
          element: <Signup></Signup>
     }
     // {
     //      path: '/dashboard',
     //      element: <DashboardLayout></DashboardLayout>,
     //      children: [
     //           {
     //                path: '/dashboard',
     //                element:  <RegistrationTable></RegistrationTable>
                    
     //           },
     //           {
     //                path: '/dashboard/registrationList',
     //                element: <RegisrtrationList></RegisrtrationList>
     //           }
     //      ]          
     // }
])