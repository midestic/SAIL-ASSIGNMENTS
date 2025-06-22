import "./Footer.css";

export default function Footer() {
  return (
    <div className="footerComp">
      <div className="footer">
        <div className="footDiv">
          <div className="fDivOne">
            <img className="f1" src="/images/footLogo.svg" alt="" />
            <img className="f2" src="/images/fooAuth.avif" alt="" />
          </div>
          <div className="listDiv">
            <div className="fDivTwo">
              <ul>
                <li>Products</li>
                <li>Piggybank</li>
                <li>Invest</li>
                <li>Safelock</li>
                <li>TargetSavings</li>
                <li>FlexNaira</li>
                <li>FlexDollar</li>
              </ul>
            </div>
            <div className="fDivThree">
              <ul>
                <li>Company</li>
                <li>About</li>
                <li>FAQs</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="fDivFour">
              <ul>
                <li>Legal</li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="fDivFive">
            <div>
              <img src="/images/facebook.svg" alt="facebook" />
              <img src="/images/insta.svg" alt="" />
              <img src="/images/twitter.svg" alt="" />
              <img src="/images/tiktok.svg" alt="" />
              <img src="/images/youtube.svg" alt="" />
            </div>

            <p className="fAddress">
              Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
              Nigeria
            </p>
            <p className="mail">badmususman50@gmail.com</p>
            <p className="num">+234 9033414253</p>
          </div>
        </div>
      </div>
    </div>
  );
}
