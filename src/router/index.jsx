import { createBrowserRouter } from "react-router-dom"

import Root from "../layout/"
import NotFound from "../components/NotFound/NotFound"
import SignupPage from "../pages/SignupPage/SignupPage"
import Login from "../pages/Login/Login"
import HomePage from '../pages/HomePage/HomePage'
import Expenses from "../pages/ExpensesPage/Expenses"
import AddExpensePage from "../pages/AddExpensePage/AddExpensePage"
import CreateCommunity from "../pages/CreateCommunityPage/CreateCommunity"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/dashboard',
        element: <HomePage />,
      },
      {
        path: '/expenses',
        element: <Expenses />,
      },
      {
        path: '/expenses/addexpense',
        element: <AddExpensePage />,
      },
      {
        path: '/create',
        element: <CreateCommunity />,
      },
    ],
  },
])

export default router