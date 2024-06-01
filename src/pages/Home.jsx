import React from "react";
import Back from "../assets/Back.png";
import Next from "../assets/Next.png";
import TopMix from "../components/TopMix";
import MadeForYou from "../components/MadeForYou";
import Recently from "../components/Recently";
import JumpBack from "../components/JumpBack";
import TopFeatured from "../components/TopFeatured";
import UniqualYours from "../components/UniqualYours";
const Home = () => {
  return (
    <div className="home-container w-[66%] bg-[#121212]">
     <div className="linerDiv">
     <div className="top-home w-[100%] pt-4">
      <div className="div mx-auto flex gap-2 w-[94%] ">
          <img src={Back} alt="" className="cursor-pointer" />
          <img src={Next} alt="" className="cursor-pointer" />
        </div>
      </div>
      <div className=" w-full  pb-8 pt-8">
        <div className="max-w-[94%] mx-auto">
          <h1 className="text-white font-semibold text-[35px] mb-8 ">
            Good afternoon
          </h1>
          <div className="w-full mx-auto">
          <TopFeatured/>
          </div>
        </div>
      </div>
     </div>
      <TopMix/>
      <MadeForYou/>
      <Recently/>
      <JumpBack/>
      <UniqualYours/>
    </div>
  );
};

export default Home;
