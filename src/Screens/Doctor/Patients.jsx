import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { MainStyle } from '../../Styles/MainStyle'
import TabNavigation from './TabNavigation'
import { Avatar, Button, DataTable, Dialog, Portal } from 'react-native-paper'
export default function Patients({ navigation }) {
  const [visible, setVisible] = useState(false)
  const hideDialog = () => {
    setVisible(false)
  }
  const items = [
    {
      name: 'Ali',
      age: 23,
      city: "Faisalabad",
    },
    {
      name: 'Hamza',
      age: 48,
      city: "Faisalabad",
    },
    {
      name: 'Umair',
      age: 27,
      city: "Lahore",
    },

  ]
  return (
    <View style={MainStyle.mainScreen}>
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
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "black", width:"70%" }}>Your Patient's</Text>
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
        <ScrollView style={{ width: "100%" }}>
          <View>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title ><Text style={Styles.li}>Sr</Text></DataTable.Title>
                <DataTable.Title><Text style={Styles.li}>Patient Name</Text></DataTable.Title>
                <DataTable.Title><Text style={Styles.li}>Age</Text></DataTable.Title>
                <DataTable.Title><Text style={Styles.li}>City</Text></DataTable.Title>
              </DataTable.Header>

              {items.map((item, i) => (
                <DataTable.Row key={i} >
                  <DataTable.Cell><Text style={Styles.li}>{i + 1}</Text></DataTable.Cell>
                  <DataTable.Cell ><Text style={Styles.li}>{item.name}</Text></DataTable.Cell>
                  <DataTable.Cell ><Text style={Styles.li}>{item.age}</Text></DataTable.Cell>
                  <DataTable.Cell ><Text style={Styles.li}>{item.city}</Text></DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </View>
        </ScrollView>
      </View>
      <View>
        <TabNavigation navigation={navigation} name="Patients" />
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
    alignItems:"center",
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
  }
})