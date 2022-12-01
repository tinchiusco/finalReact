import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import './styles.css';

const NavBar = () => {

    return (
       /*  <ul>
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to = "/category/Adventure">Adventure</Link>
            </li>
            <li>
                <Link to = "/category/Action">Action</Link>
            </li>
            <li>
                <Link to = "/category/Sports">Sports</Link>
            </li>
            <CartWidget />
        </ul> */

            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link to = "/" className="navbar-brand">GameLoft</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to = "/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to = "/genre/adventure" className="nav-link">Adventure</Link>
        </li>
        <li className="nav-item">
          <Link to = "/genre/action" className="nav-link">Action</Link>
        </li>
        <li className="nav-item">
          < Link to = "/genre/indie" className="nav-link">Indie</Link>
        </li>
        <li className="nav-item">
          < Link to = "/genre/sports" className="nav-link">Sports</Link>
        </li>
        {/* <CartWidget /> */}
      </ul>
    </div>
  </div>
</nav>
            
            
        
    );
};

export default NavBar;
