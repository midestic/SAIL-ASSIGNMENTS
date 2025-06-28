import { RiArrowDownSFill } from "react-icons/ri";
import { IoIosHome } from "react-icons/io";
import { IoIosSend } from "react-icons/io";

import Button from "../../reusable/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [personal, setPersonal] = useState(false);

  return (
    <div className="max-w-[1920px] mx-auto border-b border-gray-700">
      <div className="max-w-[1280px] mx-auto  flex justify-between items-center">
        <div className="w-[50%]  flex justify-between items-center">
          <Link to={"/"}>
            <div className="w-[20%]  flex justify-between items-center">
              <img className="h-[60px]" src="/images/kudabg.png" alt="" />
            </div>
          </Link>
          <div className="w-[80%]  flex justify-between items-center ">
            <div className=" ">
              <span
                onMouseEnter={() => setPersonal(true)}
                onMouseLeave={() => setPersonal(false)}
                className="text-[#40196d] font-[700] text-[14px] flex items-center"
              >
                Personal
                <span>
                  <RiArrowDownSFill />
                </span>
              </span>

              <div
                onMouseEnter={() => setPersonal(true)}
                onMouseLeave={() => setPersonal(false)}
                className={personal ? "block" : "hidden"}
              >
                <div className="  w-[20%] h-[500px] border bg-white fixed flex justify-between items-start ">
                  <div className="w-[60%] h-[100%] flex flex-col gap-y-[14px] p-[10px]">
                    <span className="flex items-center gap-x-[5px]">
                      <IoIosHome />
                      Discover Personal
                    </span>
                    <span className="flex items-center gap-x-[5px]">
                      {" "}
                      <IoIosSend />
                      Transfer and Spend
                    </span>
                    <span>dggdgdgd</span>
                  </div>
                  <div className="w-[39%] h-[100%] border-l border-gray-400 p-[10px]">
                    shhshsh
                  </div>
                </div>
              </div>
            </div>

            <span className="text-[#40196d] font-[700] text-[14px] flex items-center">
              Business
              <span>
                <RiArrowDownSFill />
              </span>
            </span>
            <span className="text-[#40196d] font-[700] text-[14px] flex items-center">
              Company
              <span>
                <RiArrowDownSFill />
              </span>
            </span>
            <span className="text-[#40196d] font-[700] text-[14px] flex items-center">
              Help
              <span>
                <RiArrowDownSFill />
              </span>
            </span>
          </div>
        </div>
        <div className="w-[30%]  flex justify-around items-center">
          <div className="flex justify-between items-center w-[70%] gap-x-[10px]">
            <Button
              className="text-[#40196d] font-[700] text-[14px] px-[10px] py-[10px]"
              title="Sign in"
            />
            <Button
              className="text-white w-[150px] bg-[#40196d] font-[700] text-[14px] px-[10px] py-[10px]"
              title="Join Kuda"
            />
          </div>

          <div className="w-[20%] flex justify-center items-center">
            <div className="w-[25px] h-[25px]  rounded-full flex justify-center items-center bg-[#9bb4b8]">
              <img
                className="w-[80%] h-[80]"
                src="/images/nigeria.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
