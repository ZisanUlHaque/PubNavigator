import React from "react";
import logo from "../../assets/icon.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center">
        
        {/* Text */}
        <div className="flex flex-col leading-none">
          <h3 className="text-2xl font-bold text-primary tracking-[0.3em]">
            P U B
          </h3>
          <h3 className="text-xl font-semibold text-primary">
            Navigator
          </h3>
        </div>

        {/* Logo */}
        <img src={logo} alt="logo" className="w-15 h-20 -ml-2 object-contain" />

      </div>
    </Link>
  );
};

export default Logo;