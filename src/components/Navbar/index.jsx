import { useState } from "react";
import "./styles.css";
import logo from "../../static/logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <header id="navbar">
        <nav className="navbar-container container">
          <a href="/" className="home-link">
            <div className="navbar-logo">
              <img className="logo" src={logo} alt="AS" />
            </div>
            Akanksha
          </a>
          <button
            type="button"
            id="navbar-toggle"
            aria-controls="navbar-menu"
            aria-label="Toggle menu"
            onClick={() => setToggle(!toggle)}
            aria-expanded={toggle ? "true" : "false"}
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div
            id="navbar-menu"
            aria-labelledby="navbar-toggle"
            className={toggle ? "active" : ""}
          >
            <ul className="navbar-links">
              <li className="navbar-item">
                <a className="navbar-link" href="#about">
                  About
                </a>
              </li>
              <li className="navbar-item">
                <a className="navbar-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="navbar-item">
                <a className="navbar-link" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="navbar-link resume-link"
                  href="/resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
