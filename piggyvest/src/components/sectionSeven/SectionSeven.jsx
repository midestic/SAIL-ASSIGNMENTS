import "./SectionSeven.css";

export default function SectionSeven() {
  return (
    <div className="sectionSeven">
      <div className="sect7Div">
        <div className="s7Box1">
          <div className="rounded">
            <div className="innerR">
              <img src="/images/user1.jpeg" alt="" />
              <span className="pDate">
                <div>
                  <p>Tuesday, 23rd of January 2024 by 22:00 PM</p>
                </div>

                <p className="p1">Ezinne B</p>
                <p className="p2">
                  Hi lovelies, my name is Ezinne, I came to know about piggy
                  vest from a very close friend of mine, whom I narrated how am
                  not able to save
                </p>
              </span>
            </div>

            <div className="innerR innerR02">
              <img src="/images/user2.jpeg" alt="" />
              <span className="pDate">
                <div>
                  <p>Tuesday, 23rd of January 2024 by 22:00 PM</p>
                </div>

                <p className="p1">Faousiyah A</p>
                <p className="p2">
                  They help me to have extra savings apart from my bank account
                  and it's easy and trusted
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="s7Box2">
          <div className="s71">
            <img className="u1" src="/images/user1.jpeg" alt="" />
            <img className="u2" src="/images/user2.jpeg" alt="" />
            <img className="u3" src="/images/user3.jpeg" alt="" />
            <img className="u4" src="/images/user4.jpeg" alt="" />
            <div className="u5">5m+</div>
          </div>
          <div className="s72">
            <p>Join 5+ million people who save and invest with us</p>

            <span>
              <button>
                <img src="/images/apple.png" alt="" /> Get on iPhone
              </button>
              <button>
                <img src="/images/apps.png" alt="" /> Get on Android
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
