import "./SectionThree.css";

export default function SectionThree() {
  return (
    <div className="sectionThree">
      <div className="sect3Div">
        <div className="sect3Div1">
          <span>
            <img
              className="padlock"
              src="/images/padlock.png"
              alt="piggyvest"
            />
          </span>

          <span className="spSpan">
            <p className="sp">Your security is our priority</p>
            <p className="spText">
              PiggyVest uses the highest level of Internet Security and it is
              secured by 256 bits SSL security encryption to ensure that your
              information is comepletely protected from fraud.
            </p>
            <span className="spDiv">
              <img className="spImg" src="/images/blackArrow.svg" alt="" />
              <p className="spMore">More on our security measures</p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
