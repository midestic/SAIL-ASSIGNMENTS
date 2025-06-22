import "./SectionFive.css";

export default function SectionFive() {
  return (
    <div className="sectionFive">
      <div className="sect5Div">
        <p className="sect5Title">Diverse ways to Invest</p>
        <p className="sect5Sub">
          Grow your money and invest for your future confidently.
        </p>

        <div className="sect5Box">
          <div className="s5Box1">
            <p className="p1">Earn Up to 35% returns</p>
            <p className="p2">
              Invest securely and confidently on the go. Grow your money
              confidently by investing in pre-vetted investment opportunities.
            </p>

            <span>
              <img src="/images/whiteArrow.svg" alt="" />
              <p>Learn about Investments</p>
            </span>
          </div>
          <div className="s5Box2">
            <img src="/images/myInvImg.avif" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
