import { useState } from "react"
import { Button, Text, TextInput, Pressable, View } from "react-native"

export default function App() {
    const [title, setTitle] = useState()
    const [todo,setTodo] = useState([
        {
            title: "Rohit",
            age: 27,
            roll: 26,
        },
        {
            title: "Rohit2",
            age: 33,
            roll: 56,
        },
        {
            title: "Rohit3",
            age: 55,
            roll: 12,
        },
        {
            title: "Rohit4",
            age: 89,
            roll: 22,
        }
    ])
    const addData = ()=>{
        const newArr = [...todo]
        newArr.push({title:title})
        setTodo(newArr)
    }
    return (
        <View>
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
                    // marginTop: 40,
                    // marginLeft: 19,
                    // borderRadius: 50,
                    borderTopLeftRadius: 50,
                    borderBottomLeftRadius: 50,
                    flexDirection: "row",
                    // flexBasis:1
                }}
                >
                    <TextInput style={{
                            // backgroundColor:"blue",
                            marginLeft: 20,
                            fontSize: 15
                        }}
                        value={title}
                        onChangeText={setTitle}
                        placeholder="What do you need to do?"
                        
                    />{todo.map((item,index)=>{
                        return(
                            <View>
                                <Text>
                                    {item.title}
                                </Text>
                            </View>
                        )
                    })}
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

            {/* List - area */}


            <View style={{
                backgroundColor: "#e6e281",
                height: 480,
                width: 322,
                marginTop: 30,
                marginLeft: 19,
                borderRadius: 50
            }}>
                <View>
                    <View style={{
                        height: 45,
                        width: 290,
                        marginLeft: 16,
                        marginTop: 20
                    }}>
                        <TextInput style={{
                            width: 230,
                            height: 40,
                            marginLeft: 25,
                            marginTop: 5,
                            fontSize: 20
                        }}
                            placeholder="Personal work no 1"
                        />
                    </View>
                </View>
                <View style={{
                    backgroundColor: "#81b3e6",
                    marginLeft: 30,
                    height: 2,
                    width: 260
                }}>

                </View>
                <View>
                    <View style={{
                        height: 45,
                        width: 290,
                        marginLeft: 16,
                        marginTop: 20
                    }}>
                        <TextInput style={{
                            width: 230,
                            height: 40,
                            marginLeft: 25,
                            marginTop: 5,
                            fontSize: 20
                        }}
                            placeholder="Personal work no 2"
                        />
                    </View>
                </View>
                <View style={{
                    backgroundColor: "#81b3e6",
                    marginLeft: 30,
                    height: 2,
                    width: 260
                }}>

                </View><View>
                    <View style={{
                        height: 45,
                        width: 290,
                        marginLeft: 16,
                        marginTop: 20
                    }}>
                        <TextInput style={{
                            width: 230,
                            height: 40,
                            marginLeft: 25,
                            marginTop: 5,
                            fontSize: 20
                        }}
                            placeholder="Personal work no 3"
                        />
                    </View>
                </View>
                <View style={{
                    backgroundColor: "#81b3e6",
                    marginLeft: 30,
                    height: 2,
                    width: 260
                }}>

                </View><View>
                    <View style={{
                        height: 45,
                        width: 290,
                        marginLeft: 16,
                        marginTop: 20
                    }}>
                        <TextInput style={{
                            width: 230,
                            height: 40,
                            marginLeft: 25,
                            marginTop: 5,
                            fontSize: 20
                        }}
                            placeholder="Personal work no 4"
                        />
                    </View>
                </View>
                <View style={{
                    backgroundColor: "#81b3e6",
                    marginLeft: 30,
                    height: 2,
                    width: 260
                }}>

                </View><View>
                    <View style={{
                        height: 45,
                        width: 290,
                        marginLeft: 16,
                        marginTop: 20
                    }}>
                        <TextInput style={{
                            width: 230,
                            height: 40,
                            marginLeft: 25,
                            marginTop: 5,
                            fontSize: 20
                        }}
                            placeholder="Personal work no 5"
                        />
                    </View>
                </View>
                <View style={{
                    backgroundColor: "#81b3e6",
                    marginLeft: 30,
                    height: 2,
                    width: 260
                }}>

                </View><View>
                    <View style={{
                        height: 45,
                        width: 290,
                        marginLeft: 16,
                        marginTop: 20
                    }}>
                        <TextInput style={{
                            width: 230,
                            height: 40,
                            marginLeft: 25,
                            marginTop: 5,
                            fontSize: 20
                        }}
                            placeholder="Personal work no 6"
                        />
                    </View>
                </View>
                <View style={{
                    backgroundColor: "#81b3e6",
                    marginLeft: 30,
                    height: 2,
                    width: 260
                }}>

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

            </View>

        </View>
    )
}