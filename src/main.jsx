import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Home from './components/Home.jsx'
import Learn from './components/Learn.jsx'
import Tutorial from './components/Tutorial.jsx'
import About from './components/About.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'learn',
        element: <Learn></Learn>
      },
      {
        path: 'tutorial',
        element: <Tutorial></Tutorial>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <Signup></Signup>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
