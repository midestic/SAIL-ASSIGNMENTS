import { MdKeyboardArrowDown } from "react-icons/md";

import Button from "../reusable/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="max-w-[1920px] mx-auto border-b border-gray-600 max-md:hidden mt-[5px] py-[10px]">
      <div className="max-w-[1280px] mx-auto  flex justify-between items-center">
        <div className="w-[60%]  flex justify-between items-center gap-x-[20px]">
          <div className="w-[20%]  flex justify-between items-center">
            <Link to={"/"}>
              <img
                className="h-[60px]"
                src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/logo_08e6965627/logo_08e6965627.svg"
                alt=""
              />
            </Link>
          </div>

          <div className="w-[80%]  flex justify-between items-center ">
            <div className=" ">
              <span className=" font-[600] text-[16px] flex items-center">
                <Link to={"/save"}>Save</Link>
                <span>
                  <MdKeyboardArrowDown />
                </span>
              </span>
            </div>

            <span className=" font-[600] text-[16px] flex items-center">
              Business
              <span></span>
            </span>
            <span className=" font-[600] text-[16px] flex items-center">
              Invest
              <span></span>
            </span>
            <span className=" font-[600] text-[16px] flex items-center">
              Stories
              <span></span>
            </span>

            <span className=" font-[600] text-[16px] flex items-center">
              FAQs
              <span></span>
            </span>

            <span className=" font-[600] text-[16px] flex items-center">
              Resources
              <span>
                <MdKeyboardArrowDown />
              </span>
            </span>
          </div>
        </div>
        <div className="w-[30%]  flex justify-around items-center">
          <div className="flex justify-between items-center w-[70%] gap-x-[5px]">
            <Button
              className=" font-[600] border  text-[16px] px-[20px] py-[20px]"
              title="Sign in"
            />

            <Button
              className="text-white  bg-[#4e4f4f] font-[600] text-[16px] px-[10px] py-[20px]"
              title="create free account"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
