import "./SectionFour.css";

export default function SectionFour() {
  return (
    <div className="sectionFour">
      <div className="sect4Div">
        <p className="s4Title">Many ways to build your savings</p>
        <p className="s4Sub">
          Earn 12%-22% when you save with any of these PiggyVest plans.
        </p>

        <div className="boxDiv">
          <div className="s4box1">
            <div className="s4b1">
              <p className="p1">Automated Savings</p>
              <p className="p2">
                Build a dedicated savings faster on your terms, automatically or
                manually
              </p>
            </div>
            <div className="s4b2">
              <span className="s4Label">
                <img
                  className="whiteArrow"
                  src="/images/whiteArrow.svg"
                  alt=""
                />
                Piggyvest
              </span>
              <img className="asImg" src="/images/asImg.png" alt="" />
            </div>
          </div>

          <div className="s4box2">
            <div className="s4b1">
              <p className="p1">Fixed Savings</p>
              <p className="p2">
                Lock money away for a fixed duration without having access to it
                until maturity. it's like having acustom fixed deposit.
              </p>
            </div>
            <div className="s4b2">
              <span className="s4Label">
                <img
                  className="whiteArrow"
                  src="/images/whiteArrow.svg"
                  alt=""
                />
                Safelock
              </span>
              <img className="asImg" src="/images/sfImg.png" alt="" />
            </div>
          </div>

          <div className="s4box3">
            <div className="s4b1">
              <p className="p1">Goal-oriented Savings</p>
              <p className="p2">
                Reach all your savings goals faster. Save towards multiple goals
                on your own or with a group.
              </p>
            </div>
            <div className="s4b2">
              <span className="s4Label">
                <img
                  className="whiteArrow"
                  src="/images/whiteArrow.svg"
                  alt=""
                />
                Target Savings
              </span>
              <img className="asImg" src="/images/gos.avif" alt="" />
            </div>
          </div>

          <div className="s4box4">
            <div className="s4b1">
              <p className="p1">Flex Naira</p>
              <p className="p2">
                Save, transfer, manage, organise, and withdraw your money at any
                time.
              </p>
            </div>
            <div className="s4b2">
              <span className="s4Label">
                <img
                  className="whiteArrow"
                  src="/images/whiteArrow.svg"
                  alt=""
                />
                Flex Naira
              </span>
              <img className="asImg" src="/images/fnImg.avif" alt="" />
            </div>
          </div>

          <div className="s4box5">
            <div className="s4b1">
              <p className="p1">Flex Dollar</p>
              <p className="p2">
                Save and grow your money in foreign currencies such as Dollars.
              </p>
            </div>
            <div className="s4b2">
              <span className="s4Label">
                <img
                  className="whiteArrow"
                  src="/images/whiteArrow.svg"
                  alt=""
                />
                Flex Dollar
              </span>
              <img className="asImg" src="/images/fdImg.avif" alt="" />
            </div>
          </div>
          <div className="s4box6">
            <div className="s4b1">
              <p className="p1">HouseMoney</p>
              <p className="p2">Plan for your rent and household expenses</p>
            </div>
            <div className="s4b2">
              <span className="s4Label">
                <img
                  className="whiteArrow"
                  src="/images/whiteArrow.svg"
                  alt=""
                />
                House Money
              </span>
              <img className="asImg" src="/images/hmImg.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
