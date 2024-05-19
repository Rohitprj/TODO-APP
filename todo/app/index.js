import { Button, Text, TextInput, TouchableOpacity, View } from "react-native"

export default function App() {
    return (
        <View>
            <View
                style={{
                    backgroundColor: "#e6e281",
                    height: 80,
                    width: 360,
                    display: "flex",
                    flexDirection: "row"
                }}
            >

                <Text
                    style={{
                        fontSize: 40,
                        textAlign: "center",
                        marginTop: 12,
                        marginLeft: 128
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
                backgroundColor: "#e6e281",
                height: 80,
                width: 325,
                marginTop: 40,
                marginLeft: 19,
                borderRadius: 50,
                flexDirection: "row"
            }}
            >
                <TextInput
                    placeholder="What do you need to do?"
                    style={{
                        marginLeft: 20,
                        fontSize: 15
                    }}
                />
                <TouchableOpacity
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
                </TouchableOpacity>
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
                    <TouchableOpacity style={{
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
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}