import { createBrowserRouter, redirect } from "react-router-dom"

import Root from "../layout/"
import NotFound from "../components/NotFound/NotFound"
import SignupPage from "../pages/SignupPage/SignupPage"
import Login from "../pages/Login/Login"
import HomePage from '../pages/HomePage/HomePage'
import Expenses from "../pages/ExpensesPage/Expenses"
import AddExpensePage from "../pages/AddExpensePage/AddExpensePage"
import CreateCommunity from "../pages/CreateCommunityPage/CreateCommunity"
import InviteUser from "../pages/InviteUserPage/InviteUser"

const checkLogged = () => {
  if (!localStorage.getItem('token')) return redirect('/login')
  else return null
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: checkLogged,
    errorElement: <NotFound />,
    children: [
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
        path: '/invite',
        element: <InviteUser />
      },
      {
        path: '/create',
        element: <CreateCommunity />,
        
      },
    ],
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default router