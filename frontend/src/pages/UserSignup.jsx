import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { UserDataContext } from '../context/UserContext';
const BASE_URL = import.meta.env.VITE_BASE_URL;

const UserSignup = () => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [firtsName , setFirtsName] = useState("");
  const [lastName , setLastName] = useState("");
  const {user , setUser} = useContext(UserDataContext);
  const navigate = useNavigate()

  const submitHandler = async(e) => {
    e.preventDefault();

    const newUser = {
      fullname : {
        firstname : firtsName,
        lastname : lastName
      },
      email : email,
      password : password
    };

    const response = await axios.post(`${BASE_URL}/users/register` , newUser);

    if(response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token" , data.token);
      navigate("/home")
    }

    setEmail("");
    setPassword("");
    setFirtsName("");
    setLastName("");
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          <div className='flex items-center gap-4 mb-6'>
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base '
              type='text'
              value={firtsName}
              onChange={(e) => setFirtsName(e.target.value)}
              placeholder='First name'
            />
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base '
              type='text'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Last name'
            />
          </div>
          
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-6'
            type='email'value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            type = "password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-6'
            placeholder='password'  
          />

          <button className='bg-[#111] text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-6'>
            Create account
          </button>

        </form>
          <p className='text-center'>Already have an account? <Link to={"/login"} className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>
          This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and 
          <span className='underline'>Terms of service apply</span>. 
        </p>
      </div>
    </div>
  )
}

export default UserSignup