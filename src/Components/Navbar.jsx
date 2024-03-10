import React from "react";
// import { Link } from "react-router-dom";

function Navbar(prop) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Wordplay
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div
            class={`form-check form-switch text-${
              prop.mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={prop.toggleMode}
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              {prop.mode === "dark " ? "Enable Dark Mode" : "Enable Light Mode"}
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
