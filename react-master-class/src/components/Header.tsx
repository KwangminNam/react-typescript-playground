import React, { ButtonHTMLAttributes, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <button>click me</button>
    </header>
  );
};

export default Header;
