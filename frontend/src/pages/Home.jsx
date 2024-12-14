import React, { useRef, useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import "remixicon/fonts/remixicon.css"
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {

  const [pickup , setPickup] = useState("");
  const [destination , setDestination] = useState("");
  const [panelOpen , setPanelOpen] = useState(false);
  const [vehiclePannel, setVehiclePannel] = useState(false)
  const [confirmRidePannel, setConfirmRidePannel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePannelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
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

  useGSAP(function() { //USED TO ADD ANIMATION TO ANY DIV {works like useEffect}
      if(vehiclePannel) {
        gsap.to(vehiclePanelRef.current , {
          transform : "translateY(0)",
        });
      }
      else {
        gsap.to(vehiclePanelRef.current , {
          transform : "translateY(100%)",
        });
      }    
  },[vehiclePannel])

  useGSAP(function() { //USED TO ADD ANIMATION TO ANY DIV {works like useEffect}
      if(confirmRidePannel) {
        gsap.to(confirmRidePannelRef.current , {
          transform : "translateY(0)",
        });
      }
      else {
        gsap.to(confirmRidePannelRef.current , {
          transform : "translateY(100%)",
        });
      }
  },[confirmRidePannel])

  useGSAP(function() { //USED TO ADD ANIMATION TO ANY DIV {works like useEffect}
      if(vehicleFound) {
        gsap.to(vehicleFoundRef.current , {
          transform : "translateY(0)",
        });
      }
      else {
        gsap.to(vehicleFoundRef.current , {
          transform : "translateY(100%)",
        });
      }
  },[vehicleFound])

  useGSAP(function() { //USED TO ADD ANIMATION TO ANY DIV {works like useEffect}
      if(waitingForDriver) {
        gsap.to(waitingForDriverRef.current , {
          transform : "translateY(0)",
        });
      }
      else {
        gsap.to(waitingForDriverRef.current , {
          transform : "translateY(100%)",
        });
      }
  },[waitingForDriver])

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
          <LocationSearchPanel setPanelOpen = {setPanelOpen} setVehiclePannel = {setVehiclePannel} />
        </div>
      </div>

      <div ref={vehiclePanelRef} className='w-full fixed z-10 bottom-0 bg-white px-3 py-10 pt-12 translate-y-full'>
        <VehiclePanel setVehiclePannel = {setVehiclePannel} setConfirmRidePannel = {setConfirmRidePannel}/>
      </div>
      
      <div ref={confirmRidePannelRef} className='w-full fixed z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full'>
        <ConfirmRide setConfirmRidePannel = {setConfirmRidePannel} setVehicleFound ={setVehicleFound}/>
      </div>

      <div ref={vehicleFoundRef} className='w-full fixed z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full'>
        <LookingForDriver setVehicleFound = {setVehicleFound} />
      </div>

      <div ref={waitingForDriverRef} className='w-full fixed z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full'>
        <WaitingForDriver setWaitingForDriver = {setWaitingForDriver} />
      </div>
    </div>
  )
}

export default Home