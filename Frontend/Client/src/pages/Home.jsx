import React, { useEffect, useState } from 'react'
import '../pages/Home.css'

function Home() {
  const [designation, setDesignation] = useState([
    "Software Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
  ])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(()=>{
      const interval = setInterval(()=>{
        setActiveIndex((prev)=>(prev + 1) % designation.length);
      }, 2000)

      return () => clearInterval(interval);
  }, [designation.length])


  return (
    <div className='home-wrapper'>
         <h1 className='font-bold text-white text-6xl'>Ratnakar Giri</h1>
          <h1 className='font-bold text-white text-4xl'>{designation[activeIndex]} at Fidelsya Technology</h1>
    </div>
  )
}

export default Home
