import React, { useRef, useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import "remixicon/fonts/remixicon.css"
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {

  const [pickup , setPickup] = useState("");
  const [destination , setDestination] = useState("");
  const [panelOpen , setPanelOpen] = useState(false);

  const panelRef = useRef(null);
  const panelOpenRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function() { //USED TO ADD ANIMATION TO ANY DIV {works like useEffect}
    if(panelOpen) {
      gsap.to(panelRef.current , {
        height : "70%",
        padding : 24
      })
      gsap.to(panelOpenRef.current , {
        opacity : 1
      })
    } 
    else {
      gsap.to(panelRef.current , {
        height : "0%",
        padding : 0
      })
      gsap.to(panelOpenRef.current , {
        opacity : 0
      })
    }
  },[panelOpen])

  return (
    <div className='relative overflow-hidden'>
      <img className='w-16 absolute top-5 left-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />
      
      <div>
        <img className='h-screen w-screen' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className='flex flex-col justify-end h-screen absolute  top-0 w-full '>
        
        <div className='h-[30%] p-5 bg-white relative'>
          <h5
            onClick={() => {
              setPanelOpen(false)
            }}
            ref={panelOpenRef}
            className='absolute opacity-0 right-6 top-6 text-2xl'
          >
            <i className='ri-arrow-down-wide-line'></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className='absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full'></div>
            <input 
              type="text"
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)} 
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' 
              placeholder='Add a pick-up location'
            />
            <input 
              type="text" 
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' 
              placeholder='Enter your destination'
            />
          </form>
        </div>

        <div ref={panelRef} className='bg-white h-[0]'>
          <LocationSearchPanel/>
        </div>
      </div>

      <div className='w-full fixed z-10 bottom-0 bg-white px-3 py-6'>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div className='flex border-2 active:border-black mb-2 rounded-xl p-3 items-center justify-between w-full'>
          <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium test-base'>UbserGo <span><i className ="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium test-sm'>2 mins away</h5>
            <p className='font-normal test-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <div className='text-lg font-semibold'>₹193.20</div>
        </div>
        <div className='flex border-2 active:border-black mb-2 rounded-xl p-3 items-center justify-between w-full'>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium test-base'>Moto <span><i className ="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium test-sm'>2 mins away</h5>
            <p className='font-normal test-xs text-gray-600'>Affordable, motorcycle rides</p>
          </div>
          <div className='text-lg font-semibold'>₹65</div>
        </div>
        <div className='flex border-2 active:border-black mb-2 rounded-xl p-3 items-center justify-between w-full'>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium test-base'>UberAuto <span><i className ="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium test-sm'>2 mins away</h5>
            <p className='font-normal test-xs text-gray-600'>Affordable, auto rides</p>
          </div>
          <div className='text-lg font-semibold'>₹118.68</div>
        </div>
      </div>
    </div>
  )
}

export default Home