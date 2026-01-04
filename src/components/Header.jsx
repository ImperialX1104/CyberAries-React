import { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import useStickyHeader from "../hooks/useStickyHeader";
import logoWhite from "../images/logo-white.webp";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isSticky = useStickyHeader(80);

  return (
    <>
      <header className={`transparent scroll-light ${isSticky ? "header-scrolled" : ""}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="de-flex sm-pt10">

                {/* Logo */}
                <div className="de-flex-col">
                  <Link to="/">
                    <img src={logoWhite} alt="Logo" height="40" />
                  </Link>
                </div>

                {/* Desktop Menu */}
                <div className="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                  </ul>
                </div>

                {/* Mobile Button */}
                <div className="de-flex-col">
                  <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Open menu"
                  >
                    ☰
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
