
import React from 'react'
import { MainStyle } from '../../Styles/MainStyle'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Patients from './Patients';
import Appontments from './Appointments';
import Schedule from './Schedule';

const Stack = createNativeStackNavigator();
export default function DoctorHome() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName='Home'
            >
                <Stack.Screen
                    options={{ animation: "none" }}
                    name="Home" component={Home}
                />
                <Stack.Screen
                    options={{ animation: "none" }}
                    name="Patients" component={Patients} />
                <Stack.Screen
                    options={{ animation: "none" }}
                    name="Appointments" component={Appontments} />
                <Stack.Screen
                    options={{ animation: "none" }}
                    name="Schedule" component={Schedule} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}