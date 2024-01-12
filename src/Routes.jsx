import { createBrowserRouter } from "react-router-dom";
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import UserPortal from './Components/Pages/UserPortal';
import AdminPortal from './Components/Pages/AdminPortal';
import ModalForm from './Components/Pages/ModalForm';
import UpdatePageModal from './Components/Pages/UpdatePageModal';
import TestShape from './Components/Pages/TestShape';

import Main from "./Components/Pages/Main";
import PrivateRoute from "./Components/Pages/Context/PrivateRoute";
import PrivateAdminRoute from "./Components/Pages/Context/PrivateAdminRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
    
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "/user-portal",
      element: <PrivateRoute><UserPortal></UserPortal></PrivateRoute>,
    },
    
    {
        path: "/admin-portal",
        element: <PrivateAdminRoute><AdminPortal></AdminPortal></PrivateAdminRoute>,
      },
    {
      path: "/modal-form",
      element: <PrivateAdminRoute><ModalForm></ModalForm></PrivateAdminRoute>,
    },
    {
      path: "/update-page-modal",
      element: <PrivateAdminRoute><UpdatePageModal></UpdatePageModal></PrivateAdminRoute>,
    },
    {
      path: "/test-shape",
      element: <PrivateAdminRoute><TestShape></TestShape></PrivateAdminRoute>,
    },
  ]},


  {
    path: "/register",
    element: <Register></Register>,
  },

]);

  export default router;