import React from "react";
import { LuMenu } from "react-icons/lu";

export default function MobileNav() {
  return (
    <div className="hidden max-md:block">
      <div className="w-[100%] flex justify-between items-center px-[20px] py-[10px] border-b border-gray-600">
        <img className="h-[80px]" src="/images/kudabg.png" alt="" />
        <LuMenu className="w-[100px]" />
      </div>
    </div>
  );
}
