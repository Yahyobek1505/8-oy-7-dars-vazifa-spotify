import React from "react";
import Add from "../assets/add-user.svg";
import Close from "../assets/close.svg";
import UserSceleton from "../assets/user_active.svg";
import Sceleton from "../assets/sceleton.svg";

const RightSide = () => {
  return (
    <div className="bg-black min-h-[100vh] w-[17%] px-5 pt-8 text-lg">
      <div className="activity flex justify-between mb-10 cursor-pointer">
        <h2 className="text-[#ccc]">Friend Activity</h2>
        <div className="add-user flex gap-2">
          <img src={Add} alt="" />
          <img src={Close} alt="" width={18} height={18} />
        </div>
      </div>
      <p className="text-[#ccc] mb-6">Let friends and followers on Spotify see what you’re listening to.</p>
      <div className="user-active flex gap-4 mb-5 cursor-pointer">
        <img src={UserSceleton} alt="" />
        <img src={Sceleton} alt="" />
      </div>
      <div className="user-active flex gap-4 mb-5 cursor-pointer">
        <img src={UserSceleton} alt="" />
        <img src={Sceleton} alt="" />
      </div>
      <div className="user-active flex gap-4 mb-5 cursor-pointer">
        <img src={UserSceleton} alt="" />
        <img src={Sceleton} alt="" />
      </div>
      <p className="text-[#ccc]">Go to Settings  Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
      <button className="uppercase bg-white text-black py-5 px-14 text-lg mt-6 w-full text-center rounded-full font-semibold">Settings</button>
    </div>
  );
};

export default RightSide;
