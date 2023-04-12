import React from 'react'
import './Navbar.css';
import {NavLink, Link} from 'react-router-dom';
function Navbar() {
  return (
    <div >
        <nav class="navbar navbar-expand-lg navbar-dark" >
           <div class="container-fluid">
         <a class="navbar-brand" style={{color:"#4C4452"}}>KVS GARMENTS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav justify-content-end">
        <Link class="nav-link active mx-5" aria-current="page" to="/">Home</Link>
        <Link class="nav-link mx-3" to="/about">About</Link>
        <Link class="nav-link mx-3" to="/products">Products</Link>
        <Link class="nav-link mx-3" to="/contact">Contact</Link>
        <Link class="nav-link mx-3" to="/register">Register</Link>
        <Link class="nav-link mx-3" to="/login">Login</Link>
        <Link class="nav-link mx-3" to="/cart">Cart</Link>
      </div>
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar