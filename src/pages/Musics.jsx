import { useEffect } from "react";
import Back from "../assets/Back.png";
import Next from "../assets/Next.png";
import { useParams } from "react-router-dom";
import { getToken } from "../components/utils";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../redux/authSlice";
import { useState } from "react";

const Musics = () => {
  const { id } = useParams();
  console.log(id);
  const [topMix, setTopMix] = useState([]);
  const dispatcn = useDispatch();
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (token) {
      fetch(`${import.meta.env.VITE_API_TOP_MIX}playlists/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setTopMix(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getToken()
        .then((res) => {
          dispatcn(create(res));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);
  return (
        <div className="w-full">
    <div className="top-home w-full py-4 bg-[#ddf628]">
        <div className="div mx-auto flex gap-2 w-[94%] ">
          <img src={Back} alt="" className="cursor-pointer" />
          <img src={Next} alt="" className="cursor-pointer" />
        </div>
      </div>
      <div className="infoMusic w-full flex justify-center">
      <div className="imgInfo w-[94%] mx-auto py-5 flex">
      <div>
      {topMix.images && topMix.images.length > 0 && (
          <img src={topMix.images[0].url} alt="Playlist Cover" />
        )}
      </div>
      <div className="infoName">
       <p>PUBLIC PLAYLIST</p>
      {topMix.name && topMix.name.length > 0 && (
        <h1>{topMix.name}</h1>
        )}
      </div>
        </div>
      </div>
    </div>
  );
};

export default Musics;
