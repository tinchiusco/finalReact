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

            <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link to = "/" class="navbar-brand">GameLoft</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to = "/" class="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to = "/genre/adventure" class="nav-link">Adventure</Link>
        </li>
        <li class="nav-item">
          <Link to = "/genre/action" class="nav-link">Action</Link>
        </li>
        <li class="nav-item">
          < Link to = "/genre/indie" class="nav-link">Indie</Link>
        </li>
        <li class="nav-item">
          < Link to = "/genre/sports" class="nav-link">Sports</Link>
        </li>
        <CartWidget />
      </ul>
    </div>
  </div>
</nav>
            
            
        
    );
};

export default NavBar;
