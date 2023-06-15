import { createBrowserRouter } from "react-router-dom"

import Root from "../layout/"
import NotFound from "../components/NotFound/NotFound"
import SignupPage from "../pages/SignupPage/SignupPage"
import Login from "../pages/Login/Login"
import HomePage from '../pages/HomePage/HomePage'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/signup',
        element: <SignupPage />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  },
  {
    children: [
      {
        path: '/dashboard',
        element: <HomePage />,
      }
    ]
  }
])

export default router