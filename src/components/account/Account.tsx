import React from 'react'
import {UserAuth} from "@/context/AuthContext";
import {useNavigate} from 'react-router-dom'

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
    <div>
      <h2>Account</h2>
      <h4>User Email: {user && user.email}</h4>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Account