import { useState } from "react"
import { TextInput, View, Text, Alert, Button } from "react-native"

export default function App() {

    const [name, enterName] = useState("");
    const [age, enterAge] = useState("");

      const alertOption = () =>{
        alert("Login sucessfully")
      }

    return (
        <View
            style={{
                padding: 20
            }}
        >
            <Text style={{
                marginBottom: 5
            }}>
                Name
            </Text>
            <TextInput
                style={{
                    border: "2px solid black",
                    height: 50,
                    fontSize: 20,
                    paddingLeft:10
                }}
                onChangeText={enterName}
                value={name}
                placeholder="Enter your name"
            />

            <Text style={{
                marginTop:15,
                marginBottom: 5
            }}>
                age
            </Text>
            <TextInput
                style={{
                    border: "2px solid black",
                    height: 50,
                    fontSize: 20,
                    paddingLeft:10,
                    marginBottom:15
                }}
                onChangeText={enterAge}
                value={age}
                placeholder="Enter your age"
            />
            <Button
            title="Login"
            onPress={alertOption}
            />
        </View>
    )
}