import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MusicPlayer = () => {
  const {id} = useParams();
  console.log(id);
  useEffect(() => {}, []);
  return <div></div>;
};

export default MusicPlayer;
