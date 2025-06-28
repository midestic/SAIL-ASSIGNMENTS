import { RiArrowDownSFill } from "react-icons/ri";
import Button from "../../reusable/Button";

export default function Header() {
  return (
    <div className="max-w-[1920px] mx-auto border">
      <div className="max-w-[1280px] mx-auto border flex justify-between items-center">
        <div className="w-[50%] border flex justify-between items-center">
          <div className="w-[20%] border flex justify-between items-center">
            <img className="h-[60px]" src="/images/kudabg.png" alt="" />
          </div>
          <div className="w-[80%] border flex justify-between items-center ">
            <span className="text-[#40196d] font-[700] text-[14px] flex items-center">
              Personal
              <span>
                <RiArrowDownSFill />
              </span>
            </span>
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
        <div className="w-[30%] border flex justify-around items-center">
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
