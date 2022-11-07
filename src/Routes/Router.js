import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blogs/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Signin/Login";
import Register from "../Pages/Signin/Register";

export const router = createBrowserRouter([
    {path: '/',element: <Main></Main>, errorElement: <ErrorPage></ErrorPage>, children: [
        {
            path: '/', element: <Home/>
        },
        {
            path: '/services', element: <Services></Services>
        },
        {
            path: '/blog', element: <Blog></Blog>
        },
        {
            path: '/login', element: <Login></Login>
        },
        {
            path: '/register', element: <Register></Register>
        }
    ]}
])