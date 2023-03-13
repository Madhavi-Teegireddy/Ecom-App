import React from 'react'
import { NavLink, Link } from "react-router-dom";


const Header = () => {
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
        <li class="nav-item">
          <NavLink to="/register" style={{textDecoration:"none",color:"gray",marginRight:"10px"}} class="nav-link" >Register</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/login" style={{textDecoration:"none",color:"gray",marginRight:"10px"}} class="nav-link" >Login</NavLink>
        </li>        
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