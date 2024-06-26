import { useState } from "react"
import { Button, Text, TextInput, Pressable, View, ScrollView } from "react-native"

export default function App() {
    const [title, setTitle] = useState("")
    const [todo, setTodo] = useState([
        {
            title: "1st input",
            age: 27,
            roll: 26,
        },
        {
            title: "2nd input",
            age: 33,
            roll: 56,
        }
    ])
    const addData = () => {
        const newArr = [...todo]
        newArr.push({ title: title })
        setTodo(newArr)
    }
    return (
        <View>
            {/* TODO LOGO  */}

            <View
                style={{
                    backgroundColor: "#e6e281",
                    height: 80,
                    width: 300,
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: 32,
                    borderTopLeftRadius: 50,
                    borderBottomRightRadius: 50
                }}
            >

                <Text
                    style={{
                        fontSize: 40,
                        textAlign: "center",
                        marginTop: 12,
                        marginLeft: 100
                    }}
                >
                    TO
                </Text>

                <Text
                    style={{
                        fontSize: 40,
                        textAlign: "center",
                        marginTop: 12,
                        color: "orange"
                    }}
                >
                    DO
                </Text>

            </View>

            {/* input box and button */}

            <View style={{
                backgroundColor: "red",
                height: 80,
                width: 325,
                marginTop: 40,
                marginLeft: 19,
                borderRadius: 50
            }}>
                <View style={{
                    backgroundColor: "#e6e281",
                    height: 80,
                    width: 235,
                    borderTopLeftRadius: 50,
                    borderBottomLeftRadius: 50,
                    flexDirection: "row"
                }}
                >
                    <TextInput style={{
                        marginLeft: 20,
                        fontSize: 15
                    }}
                        value={title}
                        onChangeText={setTitle}
                        placeholder="What do you need to do?"

                    />
                    <Pressable
                        onPress={addData}
                        style={{
                            marginLeft: 52,
                            backgroundColor: "#81b3e6",
                            height: 80,
                            width: 90,
                            borderTopRightRadius: 50,
                            borderBottomEndRadius: 50
                        }}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontSize: 30,
                                fontWeight: 500,
                                marginTop: 17,
                                marginLeft: 12
                            }}>
                            ADD
                        </Text>
                    </Pressable>
                </View>
            </View>

            {/* List - area & clear button */}

            <ScrollView>
                <View style={{
                    backgroundColor: "#e6e281",
                    width: 322,
                    marginLeft: 19,
                    marginTop:20,
                    marginBottom:200,
                    borderRadius: 50
                }}>
                    {todo.map((item, index) => {
                        return (
                            <View>
                                <View style={{
                                    height: 45,
                                    width: 290,
                                    marginLeft: 16,
                                    marginTop: 20
                                }}>
                                    <Text style={{
                                        width: 230,
                                        height: 40,
                                        marginLeft: 25,
                                        marginTop: 5,
                                        fontSize: 20
                                    }}
                                        placeholder="Personal work no 1"
                                    >
                                        {item.title}
                                    </Text>
                                </View>
                            </View>
                        )
                    })}

                </View>

                <View style={{
                    height: 35,
                    width: 160,
                    marginLeft: 140,
                    marginTop: 25
                }}>
                    <Pressable style={{
                        height: 25,
                        width: 120,
                        marginLeft: 35,
                        marginTop: 4
                    }}>
                        <Text style={{
                            fontSize: 16,
                            marginTop: 2,
                            color: "orange",
                            fontWeight: 800
                        }}>
                            Clear completed
                        </Text>
                    </Pressable>
                </View>

            </ScrollView>
        </View>
    )
}