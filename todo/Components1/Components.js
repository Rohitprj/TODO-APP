import { Text, Pressable, View } from 'react-native'

export default function Components() {
    return (
        <View>
            <Pressable
                style={{
                    borderWidth: 2,
                    borderColor: "red"
                }}
                onPress={() => {
                    alert("Hello")
                }}
            >
                <Text>Press</Text>
            </Pressable>
        </View>
    )
}