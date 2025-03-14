import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import Root from "../components/Root";
import Error from "../components/Error";
import Learn from "../layouts/Learn";
import Lesson from "../pages/Lesson";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Tutorial from "../layouts/Tutorial";
import About from "../layouts/About";
import PrivateRoute from "./PrivateRoute";
import Profile from "../layouts/Profile";
import UpdateProfile from "../layouts/UpdateProfile";
import ForgetPassword from "../pages/ForgetPassword";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/learn',
                element: <Learn></Learn>,
            },
            {
                path: '/learn/:lesson_no',
                element:
                    <PrivateRoute>
                        <Lesson></Lesson>,
                    </PrivateRoute>,
            },
            {
                path: '/profile',
                element:
                    <PrivateRoute>
                        <Profile></Profile>
                    </PrivateRoute>,
            },
            {
                path: '/update-profile',
                element:
                    <PrivateRoute>
                        <UpdateProfile></UpdateProfile>
                    </PrivateRoute>,
            },
            {
                path: '/tutorial',
                element:
                    <PrivateRoute>
                        <Tutorial></Tutorial>,
                    </PrivateRoute>,
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/auth',
                element: <AuthLayout></AuthLayout>,
                children: [
                    {
                        path: '/auth/login',
                        element: <Login></Login>,
                    },
                    {
                        path: '/auth/signup',
                        element: <Signup></Signup>,
                    },
                    {
                        path: '/auth/forget-password',
                        element: <ForgetPassword></ForgetPassword>,
                    },
                ]
            },
        ],
    },
]);

export default router;
