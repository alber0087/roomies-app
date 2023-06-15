import { createBrowserRouter } from "react-router-dom"

import Root from "../layout/"
import NotFound from "../components/NotFound/NotFound"
import SignupPage from "../pages/SignupPage/SignupPage"

const router = createBrowserRouter([
  { 
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/signup',
        element: <SignupPage />
      }
    ]
  }
])

export default router