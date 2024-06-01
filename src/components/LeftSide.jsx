import React from "react";
import Home from "../assets/Home.svg";
import Search from "../assets/search.svg";
import Library from "../assets/Library.svg";
import Create from "../assets/create.svg";
import Liked from "../assets/Liked Songs.svg";

const LeftSide = () => {
  
  return (
    <div className="bg-black min-h-[100vh] w-[17%] pt-[42px] px-[35px]">
      <div className="menu flex flex-col gap-4">
        <div className="home flex gap-4 items-center cursor-pointer">
          <img src={Home} alt="Home" />
          <h2 className="text-white text-lg">Home</h2>
        </div>
        <div className="home flex gap-4 items-center cursor-pointer">
          <img src={Search} alt="Search" />
          <h2 className="text-slate-300 text-lg">Search</h2>
        </div>
        <div className="home flex gap-4 items-center cursor-pointer">
          <img src={Library} alt="Libreary" />
          <h2 className="text-slate-300 text-lg">Your Libreary</h2>
        </div>
      </div>
      <div className="menu mt-12 flex flex-col gap-4">
        <div className="home flex gap-4 items-center cursor-pointer">
          <img src={Create} alt="Libreary" />
          <h2 className="text-slate-400 hover:text-white text-lg">Create Playlist</h2>
        </div>
        <div className="home flex gap-4 items-center cursor-pointer">
          <img src={Liked} alt="Libreary" />
          <h2 className="text-slate-400 hover:text-white text-lg">Liked Songs</h2>
        </div>
      </div>
      <hr className="mt-6 opacity-20 mb-8" />
      <div className="navigate flex flex-col gap-2">
        <p className="text-lg font-normal cursor-pointer hover:text-white text-slate-400">Chill Mix</p>
        <p className="text-lg font-normal cursor-pointer hover:text-white text-slate-400">Insta Hits</p>
        <p className="text-lg font-normal cursor-pointer hover:text-white text-slate-400">Your Top Songs 2021</p>
        <p className="text-lg font-normal cursor-pointer hover:text-white text-slate-400">Mellow Songs</p>
        <p className="text-lg font-normal cursor-pointer hover:text-white text-slate-400">Anime Lofi & Chillhop Music</p>
        <p className="text-lg font-normal cursor-pointer hover:text-white text-slate-400">BG Afro “Select” Vibes</p>
        <p className="text-lg font-normal cursor-pointer hover:text-white text-slate-400">Afro “Select” Vibes</p>
        <p className="text-lg font-normal cursor-pointer hover:text-white text-slate-400">Happy Hits!</p>
        <p className="text-lg font-normal cursor-pointer hover:text-white text-slate-400">Deep Focus</p>
        <p className="text-lg font-normal cursor-pointer hover:text-white text-slate-400">Instrumental Study</p>
        <p className="text-lg font-normal cursor-pointer hover:text-white text-slate-400">OST Compilations</p>
        <p className="text-lg font-normal cursor-pointer hover:text-white text-slate-400">Nostalgia for old souled mill...</p>
        <p className="text-lg font-normal cursor-pointer hover:text-white text-slate-400">Mixed Feelings</p>
      </div>
    </div>
  );
};

export default LeftSide;
