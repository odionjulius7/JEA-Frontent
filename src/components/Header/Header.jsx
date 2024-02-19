import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  let activeStyle = {
    borderBottom: "2px solid #fbc344",
  };
  //

  return (
    <section
      className="h-wrapper pt-3 px-4"
      style={{ background: headerColor }}
    >
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <Link to="/">
          <img
            src="./Logo-svg.svg"
            alt="logo"
            width={55}
            style={{ height: "35px" }}
          />
        </Link>

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink
              to="/"
              exact
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              HOMEPAGE
            </NavLink>
            <NavLink
              to="/properties"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              PROPERTIES
            </NavLink>
            <NavLink
              to="/projects"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              PROJECTS
            </NavLink>
            <NavLink
              to="/blogs"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              BLOG
            </NavLink>
            <NavLink
              id="about-mobile"
              to="/about-us"
              activeClassName="activeLink"
            >
              ABOUT US
            </NavLink>
          </div>
        </OutsideClickHandler>
        <div>
          {" "}
          <button id="about-desktop " className="button header-btn">
            <Link
              to="/about-us"
              style={{
                color: "#000",
                padding: "6px 15px",
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
          // onClick={unhandle}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
