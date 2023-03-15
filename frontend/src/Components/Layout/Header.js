import React from 'react'
import { NavLink, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from '../../Context/Auth';


const Header = () => {
  const [auth, setAuth] = useAuth()

    const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <NavLink to="/" style={{textDecoration:"none",color:"gray",marginRight:"10px"}} class="navbar-brand"> 🛒Ecommerce App</NavLink>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink to="/" style={{textDecoration:"none",color:"gray",marginRight:"10px"}} class="nav-link" >Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/category" style={{textDecoration:"none",color:"gray",marginRight:"10px"}} class="nav-link" >Category</NavLink>
        </li>         
              {!auth?.user ? (
                <>
                  <li className="nav-item" style={{marginTop:"-8px"}}>
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li> 
                  <li className="nav-item" style={{marginTop:"-8px"}}>
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown" style={{marginTop:"-8px"}}>
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none",color:"green" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                          style={{ border: "none",backgroundColor:"pink", fontWeight:"900px" }}
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}       
        <li class="nav-item">
          <NavLink to="/cart" style={{textDecoration:"none",color:"gray",marginRight:"10px"}} class="nav-link" >Cart(0)</NavLink>
        </li>       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header