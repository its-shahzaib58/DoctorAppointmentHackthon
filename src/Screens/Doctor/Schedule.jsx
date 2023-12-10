import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { MainStyle } from '../../Styles/MainStyle'
import TabNavigation from './TabNavigation'
import { Avatar, Button, Dialog, Portal, TextInput } from 'react-native-paper'
import DatePicker from '../../Components/DatePicker'

export default function Schedule({ navigation }) {
  const [visible, setVisible] = useState(false)
  const [schedule, setSchedule] = useState(false)
 
  const hideDialog = () => {
    setVisible(false)
  }
  const hideScheduleDialog = () => {
    setSchedule(false)
  }
  return (
    <View style={MainStyle.mainScreen}>
      <Portal>
        <Dialog visible={schedule} onDismiss={hideScheduleDialog}>
          <Dialog.Title>Set Schedule</Dialog.Title>
          <Dialog.Content>
            
            {/* <Button buttonColor='#fff' textColor='black' onPress={()=> <DatePicker/>}>Select Date To</Button> */}
          </Dialog.Content>
          <Dialog.Actions>
            <Button buttonColor='#f2542d' textColor='#fff' style={{ width: "100%" }} >Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Upcoming Appointment's</Dialog.Title>
          <Dialog.Content>
            <View style={{
              backgroundColor: "#0e9594",
              padding: 10,
              borderRadius: 10,
              marginVertical: 5,
            }}>
              <Text style={{ color: "#fff" }}>Ali appointment on 09:00 PM</Text>
            </View>
            <View style={{
              backgroundColor: "#0e9594",
              padding: 10,
              borderRadius: 10,
              marginVertical: 5,
            }}>
              <Text style={{ color: "#fff" }}>Ali appointment on 09:00 PM</Text>
            </View>
            <View style={{
              backgroundColor: "#0e9594",
              padding: 10,
              borderRadius: 10,
              marginVertical: 5,
            }}>
              <Text style={{ color: "#fff" }}>Ali appointment on 09:00 PM</Text>
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button buttonColor='#f2542d' textColor='#fff' onPress={hideDialog}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <View style={Styles.main}>
        <View style={Styles.headerBox}>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "black", width: "70%" }}>Your Schedule's</Text>
          <View >
            <Avatar.Image size={30} source={require("../../Assets/avatar.png")} />
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setVisible(true)}
          >
            <Icon name="bells" size={23} color="#f2542d" />
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 10 }}>
          <TouchableOpacity
            style={Styles.button}
            activeOpacity={0.8}
            onPress={() => setSchedule(true)}
          >

            <Text style={{
              fontSize: 18,
              color: "#fff",
              fontWeight: "400",
              textAlign: "center",
            }}> <Icon name="calendar" size={18} color="#fff" /> Set Schedule</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TabNavigation navigation={navigation} name="Schedule" />
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  main: {
    height: "87%",
    display: "flex",
    // justifyContent: "center",


  },
  headerBox: {
    width: "100%",
    marginVertical: 10,
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  totalPatients: {
    backgroundColor: "#0e9594",
    width: 300,
    height: 150,
    display: "flex",
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: 10

  },
  li: {
    width: "100%",
    textAlign: "center",
    color: "black",
  },
  button: {
    backgroundColor: "#0e9594",
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10
  }
})