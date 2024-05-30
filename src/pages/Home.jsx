import React from "react";
import Back from "../assets/Back.png";
import Next from "../assets/Next.png";
import Chill from "../assets/Chill.png";
import Daily from "../assets/Daily.png";
import Pop from "../assets/pop.png";
import Folk from "../assets/Folk.png";
import Daily5 from "../assets/daily5.png";
import Daily4 from "../assets/daily4.png";
import TopMix from "../components/TopMix";
const Home = () => {
  return (
    <div className="home-container w-[60%] bg-[#121212]">
      <div className="top-home w-[100%]  bg-[#303091] py-5 ">
      <div className="div mx-auto flex gap-2 w-[94%] ">
          <img src={Back} alt="" className="cursor-pointer" />
          <img src={Next} alt="" className="cursor-pointer" />
        </div>
      </div>
      <div className=" w-[100%] bg-[#18182D] pb-8 pt-8">
        <div className="max-w-[94%] mx-auto">
          <h1 className="text-white font-semibold text-[35px] mb-8">
            Good afternoon
          </h1>

          <div className="card-wrapper flex flex-wrap gap-4">
            <div className="card-top flex  items-center">
              <img src={Chill} alt="" className="rounded-l-md" />
              <div className="card-title w-[288px] rounded-r-md pl-5 py-7 bg-[#3d3d7e]">
                <h3 className="text-xl text-white font-semibold  w-[100%]">Chill Mix</h3>
              </div>
            </div>
            <div className="card-top  flex items-center ">
              <img src={Pop} alt="" className="rounded-l-md" />
              <div className="card-title w-[288px] rounded-r-md pl-5 h-[82px] bg-[#3d3d7e]">
                <h3 className="text-xl text-white font-semibold w-[100%] py-7">Pop Mix</h3>
              </div>
            </div>
            <div className="card-top flex items-center ">
              <img src={Daily} alt="" className="rounded-l-md" />
              <div className="card-title w-[288px]  rounded-r-md pl-5 py-7 bg-[#3d3d7e]">
                <h3 className="text-xl text-white font-semibold  w-[100%]">Daily Mix 1</h3>
              </div>
            </div>
            <div className="card-top flex items-center ">
              <img src={Daily5} alt="" className="rounded-l-md" />
              <div className="card-title w-[288px]  rounded-r-md pl-5 py-7 bg-[#3d3d7e]">
                <h3 className="text-xl text-white font-semibold">Daily Mix 5</h3>
              </div>
            </div>
            <div className="card-top flex items-center ">
              <img src={Folk} alt="" className="rounded-l-md" />
              <div className="card-title w-[288px] rounded-r-md pl-5 py-7 bg-[#3d3d7e]">
                <h3 className="text-xl text-white font-semibold">Folk & Acoustic Mix</h3>
              </div>
            </div>
            <div className="card-top flex items-center ">
              <img src={Daily4} alt="" className="rounded-l-md" />
              <div className="card-title w-[288px]  rounded-r-md pl-5 py-7 bg-[#3d3d7e]">
                <h3 className="text-xl text-white font-semibold">Daily Mix 4</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopMix></TopMix>
    </div>
  );
};

export default Home;
