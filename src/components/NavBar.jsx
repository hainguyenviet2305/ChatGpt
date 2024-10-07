import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";


const Navbar = () => {
  const location = useLocation();
  const [logoSrcSet, setLogoSrcSet] = useState(`${logo} 2x`);

  useEffect(() => {
    const updateLogoSrcSet = () => {
      if (window.innerWidth <= 1536) {
        setLogoSrcSet(`${logo} 4x`);
      } else {
        setLogoSrcSet(`${logo} 2x`);
      }
    };

    updateLogoSrcSet();
    window.addEventListener("resize", updateLogoSrcSet);

    return () => {
      window.removeEventListener("resize", updateLogoSrcSet);
    };
  }, []);

  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="./">
            <img srcSet={logoSrcSet} alt="Logo" className="logo" />
          </Link>
        </div>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className={location.pathname === "/pricing" ? "active" : ""}
            >
              Pricing
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
