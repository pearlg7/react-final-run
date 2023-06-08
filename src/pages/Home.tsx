import React from 'react'
import Background from '../assets/images/runners.jpg'

function Home() {
  return (
    <div 
    style={{ backgroundImage: `url(${ Background })`}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
    >
      <div className='flex flex-row justify-center items-center h-screen'>
        <h3 className='text-center font-bold text-4xl text-black rounded'>A Place to Record your Runs</h3>
      </div>
  </div>
  )
}

export default Home