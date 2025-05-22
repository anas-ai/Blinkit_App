import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import {  AuthContext } from '../context/Auth/AuthContex'

const useAuth = () => {
  const context = useContext(AuthContext)
  if(!context){
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export default useAuth