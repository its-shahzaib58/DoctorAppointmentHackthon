
import React, { useState } from 'react'
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DoctorHome from './src/Screens/Doctor/DoctorNavigation';
import PatientHome from './src/Screens/Patient/PatientHome';
import { StatusBar } from 'react-native';
const Stack = createNativeStackNavigator();
export default function App() {
  const [doctor, isDoctor] = useState(true)

  return (
    <PaperProvider>
      <StatusBar
      backgroundColor="#f2542d"
      barStyle="default"
      />
        { 
        doctor?
     <DoctorHome/>
      :
      <PatientHome/>
        }
    </PaperProvider>
  )
}