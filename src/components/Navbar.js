import React from 'react';
//import { forberSonsLogo } from '../assets';
import { forberSonsLogo } from '../assets/imports';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#home">
        <img src={forberSonsLogo} className="navbar-logo" alt="logo" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#about-us">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#customers">Customers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#why-choose-us">Why Choose Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
        <span className="navbar-text text-white">
          <i className="bi bi-envelope-fill me-2"></i>forberelectrical@gmail.com
        </span>
        <span className="navbar-text text-white ms-4">
          <i className="bi bi-telephone-fill me-2"></i>07770 565936
        </span>
      </div>
    </div>
  </nav>
);

export default Navbar;
