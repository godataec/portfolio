import { menuItemsData } from '../menuItemsData';
import { useState } from "react";
import menu from "../assets/menu.svg";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [window, setWindow] = useState(false);
 
 let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };
  return (
    <nav className="desktop-nav" style={{ width: window === false ? 200 : 60 }}>
       <div className="burger" onClick={() => openClose()}>
          <img src={menu}   alt="burger" />
       </div>
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          return (
            <li className="menu-items" key={index} style={{ display: window === false ? "inline-block" : "none" }}>
              <Link to={menu.url}>{menu.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;