import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getToken } from './utils';
import { create } from '../redux/authSlice';

const TopMix = () => {
  const [topMix, setTopMix] = useState([])
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token)
  useEffect(() =>{
  if (token) {
    fetch(`${import.meta.env.VITE_API_TOP_MIX}browse/categories/toplists/playlists`, {
      method: "GET",
      headers:{
        Authorization: `Bearer ${token}`,
      },

    })
    .then(res => res.json())
    .then(data =>{
      console.log(21, data);
      setTopMix(data.playlists.items)
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
  }, [])
  return (
    <div className='w-[94%]  mx-auto'>
    <div className='flex justify-between w-full my-4'>
<h2 className='text-white font-semibold text-2xl'>Your top mixes</h2>
<button className='text-white opacity-40'>SEE ALL</button>
    </div>
     <div className="card-wrapper w-full flex gap-6 flex-wrap justify-center">
      {
       topMix.length > 0 && topMix.map((el, index) =>{
        return (
      <div key={index} className="card w-[30%] cursor-pointer hover:shadow-2xl duration-300 bg-[#1b1b1b] p-5 rounded-md" >
      <img  src={el.images[0].url} alt="" className='w-full h-[55%] rounded-md'/>
        <h2 className="name text-white text-xl mt-6 mb-2">{el.name}</h2>   
        <p className='description text-white text-sm opacity-40 '>{el.description}</p>
      </div>
        )
       })
      }
      </div> 
    </div>
  )
}

export default TopMix
