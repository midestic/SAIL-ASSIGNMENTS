import "./Navbar.css";

export default function Navbar() {
  let logo = "/images/logo.svg";

  return (
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
  );
}
