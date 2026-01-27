import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Column 1: Brand / Info */}
        <div className="footer-col brand-col">
          <h3 className="footer-logo">MyBlog</h3>
          <p className="footer-desc">
            Sharing thoughts, code, and design.
            <br />
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="footer-col links-col">
          <h4>Navigation</h4>
          <nav>
            <Link to="/">Home</Link>
            <Link to="#">About</Link> {/* Placeholder */}
            <Link to="#">Blog</Link>{" "}
            {/* Placeholder, maybe points to archive later */}
          </nav>
        </div>

        {/* Column 3: Socials */}
        <div className="footer-col social-col">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="mailto:example@email.com">Email</a>
            <a href="#" target="_blank" rel="noreferrer">
              Bilibili
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
