import "./SectionSix.css";

export default function SectionSix() {
  return (
    <div className="sectionSix">
      <div className="sect6Div">
        <p className="sect6Title">Meet Our Saver of the Month</p>
        <p className="sect6Sub">
          Every month, we shine a spotlight on one saver, asking them about
          their savings culture and how Piggyvest has helped them.
        </p>

        <div className="s6VidBox">
          <iframe
            className="yVid"
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/2EnGMGxKuII?si=VWs8Ps2_oZ_MjSor"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
