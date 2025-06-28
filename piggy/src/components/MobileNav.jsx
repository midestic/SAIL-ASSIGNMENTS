import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
    <div className="hidden max-md:block">
      <div className="w-[100%]  flex justify-between items-center py-[20px] px-[20px] border-b">
        <Link to={"/"}>
          <img
            className="h-[30px] w-[100%]"
            src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/logo_08e6965627/logo_08e6965627.svg"
            alt=""
          />{" "}
        </Link>
        <FaBars />
      </div>
      ;
    </div>
  );
}
