import React, {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../index.css';


const Landingpage = () => {
    const [fadeIn, setFadeIn]=useState(false);

    const navigate= useNavigate();
    useEffect(()=>{
        setFadeIn(true)
        
        const timer=setTimeout(()=>{
            // setFadeIn(true)
            navigate('/home');
        },10000)
        return()=>clearTimeout(timer)
    },[navigate]);

    const handleClick = () => {
        navigate('/home');
      };

    return (
        <div className={` landing-page relative h-screen ${fadeIn ? 'fade-in':''}`} onClick={handleClick}>
            <div className='absolute bottom-2 left-0 p-10'>
                <h1 className='font-montserrat text-8xl transition-transform duration-500 hover:scale-110 slide-in'>GEARSHIFT GARAGE</h1>
                <h3 className='font-montserrat text-5xl slide-in'>Welcome to the world of cars.</h3>
            </div>
        </div>
    )
}

export default Landingpage
