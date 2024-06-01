import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Musics from "./pages/Musics";
import Layouts from "./layouts/Layouts";
import { useEffect } from "react";
import { getToken } from "./components/utils";
import { useDispatch } from "react-redux";
import { create } from "./redux/authSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() =>{
getToken()
.then(res =>{
dispatch(create(res))
})
.catch(error =>{
  console.log(error);
})
  },[])
  return (
    <div className="max-w-[1440px] mx-auto" >
    <Routes>
      <Route path="/" element = {<Layouts><Home></Home></Layouts>}></Route>
      <Route path="/likes" element = {<Layouts><Likes></Likes></Layouts>}></Route>
      <Route path="/playlist/:id" element = {<Layouts><Musics></Musics></Layouts>}></Route>
    </Routes>
    </div>
  );
}

export default App;
