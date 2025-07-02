import React from "react";
import "../main-components/main-com.css/main-header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />
      <h1>DESKLY</h1>
    </header>
  );
}

export default Header;
