import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

const CaptainSignup = () => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
  const [vehicleColor , setVehicleColor] = useState("");
  const [vehiclePlate , setVehiclePlate] = useState("");
  const [vehicleCapacity , setVehicleCapacity] = useState("");
  const [vehicleType , setVehicleType] = useState("");

  const { captain , setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname : {
        firstname : firstName,
        lastname : lastName
      },
      email : email,
      password : password,
      vehicle : {
        color : vehicleColor,
        plate : vehiclePlate,
        capacity : vehicleCapacity,
        vehicleType : vehicleType 
      }
    };

    const response = await axios.post(`${BASE_URL}/captains/register` , captainData);

    if(response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token" , data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleCapacity("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
  }


  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-lg font-medium mb-2'>What's our Captain's name</h3>
          <div className='flex items-center gap-4 mb-4'>
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base '
              type='text'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
          
          <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
          <input
            required
            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-4'
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
            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-4'
            placeholder='password'  
          />

          <h3 className='text-lg font-medium mb-2'>Vehicle information</h3>
          <div className='flex items-center gap-4 mb-4'>
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base '
              type='text'
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              placeholder='First name'
            />
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base '
              type='number'
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              placeholder='Last name'
            />
          </div>

          <div className='flex items-center gap-4 mb-4'>
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base '
              type='text'
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              placeholder='Vehicle number'
            />
            <select
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base '
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}

            >
              <option value = "" disabled >Select Vehicle Type</option>
              <option value = "car" >Car</option>
              <option value = "auto" >Auto</option>
              <option value = "motorcycle" >Motorcycle</option>
            </select>
          </div>

          <button className='bg-[#111] text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-4'>
            Create Captain Account
          </button>

        </form>
          <p className='text-center'>Already have an account? <Link to={"/captain-login"} className='text-blue-600'>Login here</Link></p>
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

export default CaptainSignup