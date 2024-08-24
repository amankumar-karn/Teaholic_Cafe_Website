import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  console.log("Navbar user: ", user); // Debugging line

  return (
    <nav className="navbar navbar-expand-lg p-1 fixed-top navbar-dark nav-scrolled-text-shadow" id="navToggler">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Teaholic</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-uppercase fs-4">
            <li className="nav-item m-auto p-3">
              <Link className="nav-link bawah p-0" to="/">Home</Link>
            </li>
            <li className="nav-item m-auto p-3">
              <Link className="nav-link bawah p-0" to="/menu">Menu</Link>
            </li>
            {/* <li className="nav-item m-auto p-3">
              <Link className="nav-link bawah p-0" to="/gallery">Gallery</Link>
            </li> */}
            <li className="nav-item m-auto p-3">
              <Link className="nav-link bawah p-0" to="/reviews">Reviews</Link>
            </li>
            <li className="nav-item m-auto p-3 pe-lg-0">
              <Link className="nav-link bawah p-0" to="/contact">Contact</Link>
            </li>
            <li className="nav-item m-auto p-3 pe-lg-0">
              <Link className="nav-link bawah p-0" to="/cart">
                <i className="bi bi-cart"></i> Cart
              </Link>
            </li>
            {user ? (
              <li className="nav-item m-auto p-3 pe-lg-0">
                <span className="nav-link bawah p-0" onClick={logoutUser} style={{ cursor: 'pointer' }}>Logout</span>
              </li>
            ) : (
              <>
                <li className="nav-item m-auto p-3 pe-lg-0">
                  <Link className="nav-link bawah p-0" to="/login">Login</Link>
                </li>
                <li className="nav-item m-auto p-3 pe-lg-0">
                  <Link className="nav-link bawah p-0" to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
