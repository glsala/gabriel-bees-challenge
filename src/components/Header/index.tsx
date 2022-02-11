import React from "react";
import { NavLink } from "react-router-dom";
import HeaderCSS from "./Header.module.css";
import Back from "./../../assets/icons/back.svg";

interface Props {
  userName: { value: string };
}

const Header: React.FC<Props> = ({ userName }) => {
  return (
    <div className={HeaderCSS.body}>
      <nav className={HeaderCSS.navbar}>
        <div className={HeaderCSS.navContainer}>
          <NavLink exact to="/Auth" className={HeaderCSS.navLogo}>
            <img src={Back} alt="delete icon" />
            <span className={HeaderCSS.goBack}>Go back</span>
          </NavLink>
          <div className={HeaderCSS.navLinks}>{userName.value}</div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
