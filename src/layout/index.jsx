import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"

function Root() {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Root