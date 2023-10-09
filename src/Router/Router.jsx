import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Events from "../Pages/Events/Events";
import Blogs from "../Pages/Blogs/Blogs";
import Gallery from "../Pages/Gallery/Gallery";
import Contact from "../Pages/Contact/Contact";
import AllServices from "../Pages/AllServices/AllServices";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import SocialLogin from "../Pages/Login/SocialLogin";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const Router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/events',
                element:<Events></Events>
            },
            {
                path:'/allservices',
                element:<AllServices></AllServices>,
                loader: () => fetch('../../public/services.json')
            },
            {
                path:'/service/:id',
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('../../public/services.json')
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/social',
                element:<SocialLogin></SocialLogin>
            }
            
        ]
    }
])

export default Router;