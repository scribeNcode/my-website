import { NavLink } from "react-router-dom"
import "../Header/Header.css"
function Header() {
  const activeStyle = {
    color: "rgb(181,87,153)",
    textDecoration : "none"
  }

  const notActive = {
    
    borderBottom: "1px solid rgb(181,87,153)"
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
            //  style={({isActive})=> isActive ? activeStyle : null}
             >
              {`{scribeNcode}`}
              </NavLink>

            <nav>
                <NavLink
                 to="/about"
                 style={({isActive})=> isActive ? activeStyle : notActive }
                 >
                  About
                  </NavLink>

                <NavLink
                 to="/writing"
                 style={({isActive})=> isActive ? activeStyle : notActive }
                 >
                  Writing
                  </NavLink>

                <NavLink
                 to="/portfolio"
                 style={({isActive})=> isActive ? activeStyle : notActive }
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