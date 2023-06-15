import { createBrowserRouter } from "react-router-dom"

import Root from "../layout/"
import NotFound from "../components/NotFound/NotFound"
import HomePage from '../pages/HomePage/HomePage'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
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