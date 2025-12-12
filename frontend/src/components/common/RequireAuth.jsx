import React, { useContext } from 'react'
import { AuthContext } from '../backend/context/Auth'
import { Navigate } from 'react-router-dom';

const RequireAuth = ({children}) => {
  const {user} = useContext(AuthContext);
  const userInfo = localStorage.getItem('userInfo');

  if(!user && !userInfo){
    return <Navigate to='/admin/login'/>
  }

  return children;
}

export default RequireAuth