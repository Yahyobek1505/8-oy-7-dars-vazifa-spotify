import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getToken } from './utils';
import { create } from '../redux/authSlice';
import RingLoader from "react-spinners/RingLoader";
const MadeForYou = () => {
  const [topMix, setTopMix] = useState([])
  const [isLoading, setIsloading] = useState(false)
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token)
  useEffect(() =>{
    setIsloading(true)
  if (token) {
    fetch(`${import.meta.env.VITE_API_TOP_MIX}browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists`, {
      method: "GET",
      headers:{
        Authorization: `Bearer ${token}`,
      },

    })
    .then(res => res.json())
    .then(data =>{
      setTopMix(data.playlists.items)
      setIsloading(false)
    })
    .catch(error =>{
      console.log(error);
    })
  }else{
    getToken()
    .then(res =>{
      dispatch(create(res))
    })
    .catch(error =>{
      console.log(error);
    })
  }
  }, [token])
  return (
    <div className='w-[96%]  mx-auto pt-4'>
    <div className='flex justify-between w-full my-4'>
<h2 className='text-white font-semibold text-2xl'>Made for you</h2>
<button className='text-white opacity-40'>SEE ALL</button>
    </div>
     <div className="card-wrapper w-full flex gap-4 flex-wrap justify-center">
      {
      isLoading ? <RingLoader color="#8136d7"height={100} width={10} className='mt-16 w-96'/> : topMix.length > 0 && topMix.slice(0, 4).map((el, index) =>{
        return (
      <div key={index} className="card w-[200px]  cursor-pointer hover:shadow-2xl duration-300 bg-[#1b1b1b] p-5 rounded-md" >
      <img  src={el.images[0].url} alt="" className='w-full h-[55%] rounded-md object-cover'/>
        <h2 className="name text-white text-xl mt-6 mb-2 truncate">{el.name}</h2>   
        <p className='description text-white text-sm opacity-40 w-full truncate'>{el.description}</p>
      </div>
        )
       })
      }
      
      </div> 
    </div>
  )
}

export default MadeForYou
