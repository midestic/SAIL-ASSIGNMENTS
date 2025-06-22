import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  let logo = "/images/logo.svg";

  return (
    <div className="navBox">
      <div className="navComp">
        <div className="navbar">
          <div className="nav1">
            <img src={logo} alt="logo" />

            <span>Save</span>
            <span>Invest</span>
            <span>Stories</span>
            <span>FAQs</span>
            <span>Resources</span>
          </div>
          <div className="nav2">
            <button className="signBtn">Sign in</button>
            <button className="createBtn">Create free account</button>
          </div>
        </div>
      </div>

      <div className="mobileCont">
        <div class="mobileNav">
          <div class="mobileNavDiv">
            <img src="/images/logo.svg" alt="" />

            <div
              className="toggleDiv"
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              {!openNav ? <FaBars width={50} height={50} /> : <FaTimes />}
            </div>
          </div>
        </div>

        <div className={!openNav ? "close" : "dropbox"}>
          <div className="itemsDiv">
            <ul>
              <li>Save</li>
              <li>Invest</li>
              <li>Stories</li>
              <li>FAQs</li>
              <li>Resources</li>
            </ul>
          </div>

          <div className="butDiv">
            <button className="bt1">Sign</button>
            <button className="bt2">Create free account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
