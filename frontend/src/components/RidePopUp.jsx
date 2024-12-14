import React, { useRef, useState } from 'react'

const RidePopUp = ({setRidePopupPanel}) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => setRidePopupPanel(false)}><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>
        <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg'>
            <div className='flex items-center gap-3'>
                <img className='h-12 object-cover w-12 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
                <h2 className='text-xl font-medium'>Harsh Patel</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 KM</h5>
        </div>
        <div className='flex gap-2 justify-between flex-col items-center'>
            <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className='ri-map-pin-user-fill'></i> 
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab , Ahemdabad</p>
                    </div>
                </div>
                
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className='ri-map-pin-2-fill'></i> 
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab , Ahemdabad</p>
                    </div>
                </div>
                
                <div className='flex items-center gap-5 p-3'>
                    <i className='ri-currency-line'></i> 
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab , Ahemdabad</p>
                    </div>
                </div>
            </div>
            <button onClick={() => {
                setVehicleFound(true)
                setConfirmRidePannel(false)
            }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
            <button onClick={() => {
                setRidePopupPanel(false)
            }} className='w-full bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg'>Ignore</button>
        </div>
    </div>
  )
}

export default RidePopUp