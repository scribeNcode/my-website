import { NavLink } from "react-router-dom"
import "../Header/Header.css"
function Header() {
  const activeStyle = {
    color: "blue",
    textDecoration : "none"
  }
  return (
    <>
    <div className="home-page-wrapper">
      <div className="blog-post-update-div">
          <p>A NEW BLOG POST JUST DROPPED CLICK HERE TO READ IT</p>
        </div>
        <div className="navigation-div">
            <NavLink
             to="/" 
             className="site-logo"
             style={({isActive})=> isActive ? activeStyle : null}
             >
              {`{scribeNcode}`}
              </NavLink>

            <nav>
                <NavLink
                 to="/about"
                 style={({isActive})=> isActive ? activeStyle : null}
                 >
                  About
                  </NavLink>

                <NavLink
                 to="/writing"
                 style={({isActive})=> isActive ? activeStyle : null}
                 >
                  Writing
                  </NavLink>

                <NavLink
                 to="/portfolio"
                 style={({isActive})=> isActive ? activeStyle : null}
                 >
                  Portfolio
                </NavLink>
            </nav>
        </div>
    </div>
        
    </>
  )
}
export default Header