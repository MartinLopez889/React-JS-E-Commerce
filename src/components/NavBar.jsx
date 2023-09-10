import React from "react"
import CartWidget from "./CartWidget"

const NavBar = () => 
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand " href="#">Lo de Tito</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Almacen</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Fiambreria</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Congelados</a>
        </li>
      </ul>
      
      <div className="position-absolute top-50 end-0 translate-middle bg-success p-2 text-white border border-black border-2 rounded">
      <CartWidget /> En el carrito: <span className= "bg-danger border border-black border-2 rounded ">2  </span>
      </div>
    </div>
  </div>
</nav>


export default NavBar;
