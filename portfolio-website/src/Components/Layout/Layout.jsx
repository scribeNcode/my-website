import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import "../Layout/Layout.css"

function Layout() {
  return (
    <div className="site-wrapper">
    <Header/>
    <main>
          <Outlet/>
    </main>
    </div>
  )
}
export default Layout