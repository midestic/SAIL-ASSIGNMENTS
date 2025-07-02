import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import { LuUser } from "react-icons/lu";
import { CiMail } from "react-icons/ci";

export default function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const [users, setUsers] = useState([]);

  function submitForm(e) {
    e.preventDefault();
    setShow(true);

    setUsers([...users, { username, email }]);
    setUsername("");
    setEmail("");
  }

  return (
    <div className="p-[20px] flex justify-between items-start gap-x-[20px]">
      <div className="w-[30%] h-auto rounded-[10px] p-[50px] space-y-[20px] border border-gray-300 shadow shadow-gray-800 mt-[100px]">
        <div className="w-[100%]">
          <p className="font-bold text-[30px] flex items-center gap-x-[10px]">
            <BsSend className="text-blue-800 font-bold " />
            Contact Form
          </p>
          <small className="text-[12px] text-gray-400">
            Fill out the form below to get in touch with us
          </small>
        </div>

        <form onSubmit={submitForm} className="w-[100%]  space-y-[20px] ">
          <div className="w-[100%] flex flex-col gap-y-[10px]">
            <label
              className="font-bold text-[20px] flex items-center gap-x-[10px]"
              htmlFor=""
            >
              <LuUser className="text-[gray]" />
              Full Name
            </label>
            <input
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Enter your full name "
              type="text"
              className="w-[100%] border border-gray-300 rounded-[5px] p-[10px]"
            />
          </div>

          <div className="w-[100%] flex flex-col gap-y-[10px]">
            <label className="font-bold text-[20px] flex items-center gap-x-[10px]">
              <CiMail className="text-[gray]" /> Email Address
            </label>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email address "
              type="email"
              className="w-[100%] border border-gray-300 rounded-[5px] p-[10px]"
            />
          </div>

          <button
            type="submit"
            className="w-[100%] p-[10px] font-bold text-white bg-blue-800 rounded-[5px]"
          >
            Submit Form
          </button>
        </form>
      </div>

      <div
        className={
          !show
            ? "hidden"
            : "w-[60%] h-auto rounded-[10px] border-gray-700 shadow shadow-gray-700 mt-[100px] mx-auto p-[10px]"
        }
      >
        <div className="w-[100%] flex justify-around items-start gap-x-[10px] gap-y-[10px] flex-wrap">
          {users.map((details) => (
            <div className="w-auto h-auto p-[20px] rounded-[10px] flex flex-col gap-y-[20px] bg-gray-800">
              <p className="text-white font-bold mb-[10px]">
                Form Data Preview
              </p>
              <div
                className="w-[100%] p-[15px]  flex items-center gap-x-[5px] bg-gray-700
               border-white rounded-[10px] text-white font-bold text-[14px]"
              >
                <LuUser className="text-[green] w-[50px] h-[20px]" />
                <div className="w-[90%]">
                  <p>Name</p>
                  <p> {details.username}</p>
                </div>
              </div>
              <div
                className="w-[100%] p-[15px]  flex items-center gap-x-[5px]  bg-gray-700
               border-white rounded-[10px] text-white font-bold text-[14px]"
              >
                <CiMail className="text-[green] w-[50px] h-[20px]" />
                <div className="w-[90%]">
                  <p>Email</p>
                  <p> {details.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
