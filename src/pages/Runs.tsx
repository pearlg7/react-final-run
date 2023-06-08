import React from 'react'
import Background from '../assets/images/runners.jpg'
import Navbar from '../components/Navbar'

function Runs() {
    return (
        <div
           style={{ 
            backgroundImage: `url(${ Background })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }} 
          className='fixed top-0 w-full h-full'>
          <Navbar />
    
          <div
            
            style={{
              backdropFilter: 'blur(7px)',
              height: '100vh',
              overflowY: 'scroll',
              scrollbarWidth: 'thin'
            }}
          > 
            <div>
              <h1 className='text-gray-600 flex flex-row justify-center items-center p-15 text-center font-bold text-4xl'>
                Under Construction
              </h1>
            </div>
          </div>
        </div>
      )
    }
export default Runs