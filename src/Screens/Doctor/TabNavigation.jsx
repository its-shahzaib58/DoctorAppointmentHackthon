import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
export default function TabNavigation(props) {
    const [home, setHome] = useState(true)
    const [patients, setPatients] = useState(false)
    const [appointments, setAppointments] = useState(false)
    const [schedule, setSchedule] = useState(false)


    // const navigation = useNavigation()
    const NavigateFunction = route =>{
       props.navigation.navigate(route)
        
    }
    useEffect(()=>{
        if(props.name=="Home")
        {
            setHome(true)
            setPatients(false)
            setAppointments(false)
            setSchedule(false)
            return;
        }else if(props.name == "Appointments")
        {
            setHome(false)
            setPatients(false)
            setAppointments(true)
            setSchedule(false)
            return;
        }else if(props.name == "Patients")
        {
            setHome(false)
            setPatients(true)
            setAppointments(false)
            setSchedule(false)
            return;
        }else{
            setHome(false)
            setPatients(false)
            setAppointments(false)
            setSchedule(true)
            return;
        }
    },[])
  return (
    <View style={TabStyle.TabMain}>
     <TouchableOpacity 
     onPress={()=>NavigateFunction("Home")}
     activeOpacity={0.9}
     style={{
        backgroundColor:home?"#fff":"#f2542d",
        padding:10,
        borderRadius:50
     }}
     >
        <Icon name="home" color={home?"#f2542d":"#f5dfbb"} size={29} />
     </TouchableOpacity>

     <TouchableOpacity 
     onPress={()=> NavigateFunction("Patients")}
     activeOpacity={0.9}
     style={{
        backgroundColor:patients?"#fff":"#f2542d",
        padding:10,
        borderRadius:50
     }}
     >
        <Icon name="user" color={patients?"#f2542d":"#f5dfbb"} size={29} />
     </TouchableOpacity>
     <TouchableOpacity 
     onPress={()=> NavigateFunction("Appointments")}
     activeOpacity={0.9}
     style={{
        backgroundColor:appointments?"#fff":"#f2542d",
        padding:10,
        borderRadius:50
     }}
     >
        <Icon name="addusergroup" color={appointments?"#f2542d":"#f5dfbb"} size={29} />
     </TouchableOpacity>
     <TouchableOpacity 
       onPress={()=> NavigateFunction("Schedule")}
     activeOpacity={0.9}
     style={{
        backgroundColor:schedule?"#fff":"#f2542d",
        padding:10,
        borderRadius:50
     }}
     >
        <Icon name="calendar" color={schedule?"#f2542d":"#f5dfbb"} size={29} />
     </TouchableOpacity>
    </View>
  )
}

const TabStyle = StyleSheet.create({
    TabMain: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#f2542d",
        margin: 10,
        padding: 15,
        borderRadius: 10,
        
      }
      
})