import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
const BASE_URL = import.meta.env.VITE_BASE_URL;


const CaptainLogin = () => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [captainData , setCaptainData] = useState({});

  const {captain , setCaptain} = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async(e) => {
    e.preventDefault();
    
    const captainData = {
      email : email,
      password : password
    };

    const response = await axios.post(`${BASE_URL}/captains/login`);

    if(response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token" , data.token);
    }

    setEmail("");
    setPassword("");
  }


  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            type = "password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7'
            placeholder='password'  
          />

          <button className='bg-[#111] text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-7'>
            Login
          </button>

        </form>
          <p className='text-center'>Join a fleet? <Link to={"/captain-signup"} className='text-blue-600'>Register as a captain</Link></p>
      </div>
      <div>
        <Link to={"/login"} className='bg-[#d5622d] flex items-center justify-center text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-5'>
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin