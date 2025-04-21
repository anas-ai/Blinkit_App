import { View, Text, StatusBar } from 'react-native'
import React, { useLayoutEffect } from 'react'
import AppNavigatoin from './src/navigators/AppNavigatoin'

const App = () => {
   useLayoutEffect(() => {
      StatusBar.setHidden(true); 
      return () => StatusBar.setHidden(false);
    }, []);
  
  return (
    <AppNavigatoin/>
  )
}

export default App