import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const BASE_URL = import.meta.env.VITE_BASE_URL;


const UserLogout = () => {
    
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const logoutHandler = () => {
        axios.get(`${BASE_URL}/users/logout` , {
            headers : { 
                Authorization : `Bearer ${token}`
            }
        }).then((response) => {
            if(response.status === 200) {
                localStorage.removeItem("token");
                navigate("/login");
            }
        });
    }

    useEffect(() => {
        logoutHandler()
    } , [])

  return (
    <div>
    
    </div>
  )
}

export default UserLogout