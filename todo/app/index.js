import { useState } from "react"
import { TextInput, View, Text, Alert, Button } from "react-native"

export default function App() {

    const [name, enterName] = useState("");
    const [age, enterAge] = useState("");

      const alertOption = () =>{
        if(name!==""){
            alert("Login sucessfully\n"+name+"\n"+age)
        }
        else{
            alert("Name not defined")
        }
        
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
                    borderRadius:12,
                    height: 50,
                    fontSize: 20,
                    paddingLeft:10,
                    fontWeight:100
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
                    borderRadius:12,
                    height: 50,
                    fontSize: 20,
                    paddingLeft:10,
                    marginBottom:15,
                    fontWeight:100
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