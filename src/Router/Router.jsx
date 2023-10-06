import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Events from "../Pages/Events/Events";
import Blogs from "../Pages/Blogs/Blogs";
import Gallery from "../Pages/Gallery/Gallery";
import Contact from "../Pages/Contact/Contact";


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
            
        ]
    }
])

export default Router;