import "./Sidebar.css";

export default function Sidebar({ open, setOpen }) {
  return (
    <div className={open ? "sideComp" : "close"}>
      <div className="sideCon">
        <div className="closeDiv" onClick={() => setOpen(!open)}>
          <h1>X</h1>
        </div>
        <div className="featuresDiv">
          <ul>
            <li>Features</li>
            <li>Company</li>
            <li>Career</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      ;
    </div>
  );
}
