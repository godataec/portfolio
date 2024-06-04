
import Navbar from './navbar';
import logo from "../assets/godata.svg";
import { Link } from 'react-router-dom';
import { useState } from "react";

const Header = () => {

  return (
    <header>
      <div className= "image-container">
        <div className = "logo">
          <Link to ="/"><img src={logo} alt="Logo" /> </Link>
        </div>
       
      </div>
      <div className="nav-area">
        <Navbar/>
      </div>
    </header>
  );
};
export default Header;