import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./Navbar.css";
import { BiMenu } from "react-icons/bi";

let logo = "/image/logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(true);
  }

  return (
    <div className="overall">
      <div className="navComp">
        <div className="navContainer">
          <div className="nav1">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="menuItems">
              <span>Features</span>
              <span>Company</span>
              <span>Career</span>
              <span>About</span>
            </div>
          </div>

          <BiMenu className="menu" onClick={toggle} />

          <div className="nav2">
            <button className="btn1">Login</button>
            <button className="btn2">Register</button>
          </div>
        </div>
      </div>

      <Sidebar open={open} setOpen={setOpen} />
    </div>
  );
}
