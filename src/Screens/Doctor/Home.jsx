import { View, Text, ScrollView, StyleSheet, ImageBackground, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MainStyle } from '../../Styles/MainStyle'
import TabNavigation from './TabNavigation'
import Icon from 'react-native-vector-icons/AntDesign'
import { Avatar, Button, DataTable, Dialog, Portal } from 'react-native-paper'

export default function Home({ navigation }) {
    const [visible, setVisible] = useState(false)
    const hideDialog = () => {
        setVisible(false)
    }
    const items = [
        {

            name: 'Ali',
            time: "09:00 PM",
            slot: 16,
        },
        {
            name: 'Hamza Shafiq',
            time: "09:40 PM",
            slot: 20,
        },
        {
            name: 'Hamza Shafiq',
            time: "09:40 PM",
            slot: 20,
        },
        {
            name: 'Hamza Shafiq',
            time: "09:40 PM",
            slot: 20,
        },
        {
            name: 'Hamza Shafiq',
            time: "09:40 PM",
            slot: 20,
        },
        {
            name: 'Hamza Shafiq',
            time: "09:40 PM",
            slot: 20,
        },
        {
            name: 'Hamza Shafiq',
            time: "09:40 PM",
            slot: 20,
        },
        {
            name: 'Hamza Shafiq',
            time: "09:40 PM",
            slot: 20,
        },
        {
            name: 'Hamza Shafiq',
            time: "09:40 PM",
            slot: 20,
        },
        {
            name: 'Hamza Shafiq',
            time: "09:40 PM",
            slot: 20,
        },
        {
            name: 'Hamza Shafiq',
            time: "09:40 PM",
            slot: 20,
        },
        {
            name: 'Hamza Shafiq',
            time: "09:40 PM",
            slot: 20,
        },
        {
            name: 'Hamza Shafiq',
            time: "09:40 PM",
            slot: 20,
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
                    <Text style={{ fontSize: 17, fontWeight: "bold", color: "black", width:"70%"}}>Welcome Dr.Sajid</Text>
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
                <View style={Styles.totalPatients}>
                    <Text style={{ fontSize: 17, color: "#fff", paddingVertical: 10 }}>Your Total Patients</Text>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Image style={{ width: 40, height: 40, marginRight: 5 }} source={require("../../Assets/pateint.png")} />
                        <Text style={{ fontSize: 40, color: "#fff" }}>40</Text>
                    </View>
                </View>
                <Text style={{ padding: 10, width: "100%" }}>Today Appoint Patients</Text>
                <ScrollView style={{ width: "100%" }}>
                    <View>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title ><Text style={Styles.li}>Sr</Text></DataTable.Title>
                                <DataTable.Title><Text style={Styles.li}>Patient Name</Text></DataTable.Title>
                                <DataTable.Title><Text style={Styles.li}>Time</Text></DataTable.Title>
                                <DataTable.Title><Text style={Styles.li}>Slot</Text></DataTable.Title>
                            </DataTable.Header>

                            {items.map((item, i) => (
                                <DataTable.Row key={i} >
                                    <DataTable.Cell><Text style={Styles.li}>{i + 1}</Text></DataTable.Cell>
                                    <DataTable.Cell ><Text style={Styles.li}>{item.name}</Text></DataTable.Cell>
                                    <DataTable.Cell ><Text style={Styles.li}>{item.time}</Text></DataTable.Cell>
                                    <DataTable.Cell ><Text style={Styles.li}>{item.slot}</Text></DataTable.Cell>
                                </DataTable.Row>
                            ))}
                        </DataTable>
                    </View>
                </ScrollView>
            </View>
            <View>
                <TabNavigation navigation={navigation} name="Home" />
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    main: {
        height: "87%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    headerBox: {
        width: "100%",
        marginVertical: 10,
        padding: 10,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems:"center"
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