import React from 'react';
import { Link } from "react-router-dom"

const Start = () => {
  return (
    <div>
        <div className='bg-center bg-cover bg-[url(https://images.squarespace-cdn.com/content/v1/57ab8e53414fb5bb049b72e6/1597186887358-DDV0AT1BOXYXLQLWOLHT/oussama-zaidi-YTFD27-j1t0-unsplash.jpg?format=1500w)] w-full pt-8 h-screen flex flex-col justify-between bg-red-400'>
            <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />
            <div className='bg-white py-4 px-4 pb-7'>
                <h2 className='text-[30px] font-bold'>
                    Get Started with Uber
                </h2>
                <Link to={"/login"} className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>
                    Continue
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Start