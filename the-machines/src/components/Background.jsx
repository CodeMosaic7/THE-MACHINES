import React from 'react'
import Supercars from '../assets/Supercars.mp4'
import Header from './Header'
const Background = () => {
  return (
    <>
    <div className='absolute top-0 left-0 w-[100%] h-[100%] bg-[rgb(0,0,0,0.2)]'></div>
    <div className='m-0 p-0 w-[100%] h-[100%] object-cover'>
      <video src={Supercars}
      autoPlay loop muted/>
      <div className='absolute w-[100%] h-[100%] top-0'>
        <Header/>
      </div>
    </div>
    </>
  )
}

export default Background
