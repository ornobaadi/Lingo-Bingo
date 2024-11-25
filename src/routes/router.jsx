import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import Root from "../components/Root";
import Error from "../components/Error";
import Learn from "../layouts/Learn";
import Lesson from "../components/Lesson";

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
                element: <Lesson></Lesson>,
            },
            {
                path: '/tutorial',
                element: <h1>Tutorial layout</h1>,
            },
            {
                path: '/about',
                element: <h1>About layout</h1>,
            },
            {
                path: '/auth',
                element: <h1>Login</h1>,
            },
        ],
    },
]);

export default router;
