import React from 'react'
import { AuthContext } from '../backend/context/Auth'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({ children }) => {
  const { user } = useContext(AuthContext)

  // Check if user exists and has a valid token
  if (!user || !user.token) {
    return <Navigate to='/admin/login' />
  }

  return children
}

export default RequireAuth