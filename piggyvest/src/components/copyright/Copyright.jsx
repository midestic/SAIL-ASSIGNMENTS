import "./Copyright.css";

export default function Copyright() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="bottomDiv">
      <p>
        Piggyvest (formerly piggybank.ng) is the leading online savings &
        investing platform in Nigeria. For over 9 years, our customers have
        saved and invested billions of Naira that they would normally be tempted
        to spend.
      </p>

      <p>
        PV Capital Limited is a fund manager duly licensed by the Securities and
        Exchange Commission (SEC) of Nigeria.
      </p>

      <p className="year">
        2016 - {year} PiggyTech Global Limited - RC 1405222
      </p>
    </div>
  );
}
