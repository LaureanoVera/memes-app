import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = ({ handleTheme, theme }) => {
  return (
    <nav
      className={`py-1 navbar shadow ${theme.nav} ${theme.text} ${theme.bg}`}
    >
      <div className="container-fluid">
        <div>
          <a className={`${theme.text}`} href="/" onClick={handleTheme}>
            {theme.bg === "bg-dark" ? (
              <i className="far fa-sun"></i>
            ) : (
              <i className="far fa-moon"></i>
            )}
          </a>
        </div>
        <NavLink className="navbar-brand" to="/">
          MemeCreator
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/editor">
                Editor
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/error?page_wtf">
                404
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Author
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink activeClassName="dropdown-item" className="dropdown-item" to="/dev">
                    Credits
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" target="blank" href="https://portfolio-lv.netlify.app/">
                    Portfolio
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* <NavLink
          className={`nav-link ${theme.text} ms-auto`}
          to="/dev"
        >
          Dev
        </NavLink>
        <NavLink
          className={`nav-link ${theme.text} me-auto`}
          to="/profile/lauri"
        >
          Profile
        </NavLink> */}
      </div>
    </nav>
  );
};

export default Navbar;
