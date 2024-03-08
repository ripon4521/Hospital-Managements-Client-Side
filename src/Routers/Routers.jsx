import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Services from "../Page/Services/Aboutus";
import SignIn from "../Page/SignIn/SignIn";
import Apoinment from "../Page/Apoinmenyt/Apoinment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },{
          path:'/signup',
          element:<Login></Login>
        },
        {
          path:'/aboutus',
          element:<Services></Services>
        },
        {
          path:'/signin',
          element:<SignIn></SignIn>
        },
        {
          path:'/appoinment',
          element:<Apoinment></Apoinment>
        }
      ]
    },
  ]);
  export default router ;