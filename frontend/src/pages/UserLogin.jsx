import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

const UserLogin = () => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  
  const navigate = useNavigate()
  const {user , setUser} = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const userData = {
      email : email,
      password : password
    };

    const response = await axios.post(`${BASE_URL}/users/login` , userData);

    if(response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token" , data.token);
      navigate("/home");
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
          <p className='text-center'>New here? <Link to={"/signup"} className='text-blue-600'>Create new Account</Link></p>
      </div>
      <div>
        <Link to={"/captain-login"} className='bg-[#10b461] flex items-center justify-center text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-5'>
          Sign in as Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin