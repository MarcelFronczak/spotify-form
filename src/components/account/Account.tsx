import React from 'react'
import {UserAuth} from "@/context/AuthContext";
import {useNavigate} from 'react-router-dom'
import './account.scss'

const Account: React.FC = () => {
  const navigate = useNavigate();

  const {user, logout} = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/spotify-form/');
      console.log("You are logged out");
    } catch (e: any) {
      console.log(e.message);
    }
  }

  return (
    <div className='account_section'>
      <h2>Account</h2>
      <h4><span>User Email:</span> {user && user.email}</h4>
      <button className='logout' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Account