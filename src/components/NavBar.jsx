import React from "react"
import CartWidget from "./CartWidget"

const NavBar = () => 
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand " href="#">Todo DBZ</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Pop!</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Keychain</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">T-shirts</a>
        </li>
      </ul>
      
      <div className="position-absolute top-50 end-0 translate-middle bg-success p-2 text-white border border-black border-2 rounded">
      <CartWidget /> 
      </div>
    </div>
  </div>
</nav>


export default NavBar;
