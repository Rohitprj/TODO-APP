import { useState } from "react"
import { TextInput, View, Text, Alert, Button } from "react-native"

export default function App() {

    const names = ["name1", "name2", "name3", "name4", "name5", "name6"]

    return (
        <View>
            {names.map((item,index) => {
                return(
                <Text key={index}>{index + 1}. {item}</Text>
            )
            })}
        </View>
    )
}