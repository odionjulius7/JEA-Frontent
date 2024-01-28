import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <img src="./logo-equinix.png" alt="logo" width={80} />

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <Link to="/">HOMEPAGE</Link>
            <Link to="/properties">PROPERTIES</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/blogs">BLOG</Link>
            <Link id="about-mobile" to="/about-us">
              ABOUT US
            </Link>
          </div>
        </OutsideClickHandler>
        <div>
          {" "}
          <button id="about-desktop " className="button header-btn">
            <Link
              to="/about-us"
              style={{
                color: "#000",
              }}
            >
              ABOUT US
            </Link>
          </button>
        </div>
        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
