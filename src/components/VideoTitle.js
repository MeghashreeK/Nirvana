import React, { useEffect, useState } from 'react'

const VideoTitle = () => {
  const [showOverview, setshowOverview] = useState(true);
  const [removeOverview,setRemoveOverview]=useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setshowOverview(false);
    }, 4000);

    return () => { clearTimeout(timer); }
  }, []);

  const handleTransitionEnd=()=>{
    setRemoveOverview(true);

  }

  return (
    <div className='pt-[25%] absolute text-white bg-gradient-to-r from-black w-screen aspect-video pl-5 z-0'>
      <div>
        <h1 className={`font-bold mb-2 ${removeOverview ? "text-xl sm:text-5xl" : "text-xl sm:text-7xl"}`}>Elemental</h1>
       {(!removeOverview) && <p className={`w-2/5 hidden lg:block transition duration-1000 ${showOverview ? "opacity-100" : "opacity-0"}`} onTransitionEnd={handleTransitionEnd}>
       In a city where fire, water, land, and air residents live together, a fiery young woman and a go-with-the-flow guy discover something elemental: how much they actually have in common.
        </p>}
        <div className='flex gap-2 mt-2'>
          <button className='flex bg-white text-black justify-center items-center font-bold text-center py-1 px-2 sm:px-6 sm:py-2 gap-1 rounded-sm transition duration-300 hover:bg-opacity-60'><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/play--v1.png" alt="play--v1"/>Play</button>
          <button className='flex bg-gray-400 bg-opacity-40 justify-center items-center font-bold text-center py-1  px-2 sm:px-6 sm:py-2 gap-1 rounded-sm transition duration-300 hover:bg-opacity-30'><img width="30" height="30" src="https://img.icons8.com/material-outlined/24/ffffff/info--v1.png" alt="info--v1"/>More Info</button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle;





