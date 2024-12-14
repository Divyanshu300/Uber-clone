import React from 'react'

const LocationSearchPanel = ({setPanelOpen , setVehiclePannel}) => {
    const location = [
        "24B, Near Kapoor's cafe, Sheriyans Coding School, Bhopal",
        "12B, Near Sharma's cafe, Sheriyans Coding School, Bhopal",
        "18B, Near Singh's cafe, Sheriyans Coding School, Bhopal",
        "26B, Near Malholtra's cafe, Sheriyans Coding School, Bhopal",
        "22B, Near Agarwal's cafe, Sheriyans Coding School, Bhopal",
        "13B, Near Pathak's cafe, Sheriyans Coding School, Bhopal",
    ];


  return (
    <div>
        {
            location.map((elem , index) => (
                <div 
                    onClick={() => {
                        setVehiclePannel(true);
                        setPanelOpen(false)
                    }} 
                    key={index} 
                    className='flex items-center gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl my-2 justify-start'
                >
                    <h5 className='bg-[%eee] h-8 flex items-center justify-center w-12 rounded-full'><i className='ri-map-pin-fill '></i></h5>
                    <h4 className='font-medium'>{elem}</h4>
                </div>
            ))
        }
    </div>
  )
}

export default LocationSearchPanel