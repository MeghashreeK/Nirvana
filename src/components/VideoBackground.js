import React, { useEffect } from 'react'

const VideoBackground = () => {

  return (
    <div>
      <iframe className='w-screen aspect-video' src="https://www.youtube.com/embed/hXzcyx9V0xw?si=aaZjORhmX6wN2KSm&autoplay=1&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
  
}

export default VideoBackground;


