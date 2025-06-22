import "./Hero.css";

export default function Hero() {
  return (
    <div className="hSection">
      <div className="heroSection">
        <div className="heroDiv">
          <div className="heroOne">
            <div className="heroOneInner">
              <button className="vestBtn">
                The 2024 PiggyVestSavings Report
              </button>
              <p className="heroTitle">The Better Way to Save & Invest</p>
              <p className="heroDesc">
                Piggyvest helps over 5 million customers achieve their financial
                goals by helping them save and invest with ease.
              </p>
              <div className="hBtnDiv">
                <button className="hSpan1">
                  <img src="/images/apple.png" width="20" alt="" />
                  Get on iPhone
                </button>
                <button className="hSpan2">
                  <img src="/images/apps.png" width="20" alt="" /> Get on
                  Android
                </button>
              </div>
            </div>
          </div>
          <div className="heroTwo">
            <div className="h2Div">
              <img
                className="herogal"
                src="/images/herogal.avif"
                alt="piggyvest"
              />

              <div className="tagDiv">
                <img className="safelock" src="/images/safelock.png" alt="" />
                <img className="tsavings" src="/images/tsavings.png" alt="" />
                <img className="flxnaira" src="/images/flxnaira.png" alt="" />
                <img className="investify" src="/images/investify.png" alt="" />

                <img className="pgbank" src="/images/pgbank.png" alt="" />

                <img className="hmoney" src="/images/hmoney.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
