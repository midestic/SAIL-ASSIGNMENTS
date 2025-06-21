import "./Hero.css";

export default function Hero() {
  let databiz = "/image/databiz.svg";
  let audiophile = "/image/audiophile.svg";
  let maker = "/image/maker.svg";
  let meet = "/image/meet.svg";
  let hero = "/image/hero.png";

  return (
    <div className="heroComp">
      <div className="heroContainer">
        <div className="hero1">
          <div className="heroInner">
            <span>Make</span> <br />
            <span>remote work</span>
            <div className="rDiv">
              <h2 className="mr">Make remote work</h2>
            </div>
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <div className="btnDiv">
              <button>Learn more</button>
            </div>
            <div className="clientDiv">
              <img src={databiz} alt="" />
              <img src={audiophile} alt="" />
              <img src={meet} alt="" />
              <img src={maker} alt="" />
            </div>
          </div>
        </div>

        <div className="hero2">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}
