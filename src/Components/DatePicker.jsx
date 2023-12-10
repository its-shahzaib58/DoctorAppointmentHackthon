import { View, Text } from 'react-native'
import React from 'react'
import DatePickerEvent from '@react-native-community/datetimepicker';


export default function DatePicker() {
    return (
        <DatePickerEvent
            value={new Date()}
            mode="date"
        />
    )
}