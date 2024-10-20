import React, { useEffect, useState } from 'react'
import Supercars from '../assets/Supercars.mp4'
import CoverImage from '../assets/cover_image.jpg'
import Header from './Header'
import '../index.css'
const Background = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [startTransition, setStartTransition] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTransition(true);
      setTimeout(() => { setShowVideo(true); }, 1000)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <div className='absolute top-0 left-0 w-[100%] h-[100%] bg-[rgb(0,0,0,0.2)]'></div>
      <div className='w-[100%] h-[750px] object-cover'>
        {showVideo ? (<video src={Supercars}
          autoPlay loop muted />) : <img src={CoverImage} alt="Loading..." className={`relative w-[100%] h-[100%] object-cover transition-image ${startTransition ? 'slide-out' : ''}`} />}

        <div className='absolute w-[100%] top-0'>
          <Header />
        </div>
      </div>
    </>
  )
}

export default Background
