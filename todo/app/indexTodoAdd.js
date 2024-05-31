// import { useState } from "react"
// import { View, Text, TextInput, alert, Button } from "react-native"

// export default function App() {
//   const arrobject = [
//     {
//       title: "Rohit",
//       age: 27,
//       roll: 26,
//     },
//     {
//       title: "Rohit2",
//       age: 33,
//       roll: 56,
//     },
//     {
//       title: "Rohit3",
//       age: 55,
//       roll: 12,
//     },
//     {
//       title: "Rohit4",
//       age: 89,
//       roll: 22,
//     }
//   ]
//   const arrobjects = [
//   ];

//   return (
//     <View>
//       {arrobject.filter((item, index) => {
//         return index > 0;
//       }).map((item, index) => {
//           return (
//             <View key={index}>
//               <Text>
//                 {item.title}
//                 {/* {item.title} */}

//               </Text>
//             </View>
//           )

//       })
//       }
//     </View>
//   );
// }


import { useState } from "react"
import { View, Text, TextInput, alert, Button, Pressable } from "react-native"

export default function App() {
    const [num, setNum] = useState()
    const [todo, setTodo] = useState([
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
         const addData = () =>{
            const arr2 = [...todo]
            arr2.push({title:num})
            setTodo(arr2)

            setNum("");
    }

    return (
        <View>
            <TextInput style={{
                border:"2px solid black",
                fontWeight:100
            }}
                value={num}
                onChangeText={setNum}
                placeholder="todotodotodotodotodo"
            />
            {todo.map((item, index) => {
                return (
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
                border:"1px solid black",
                width:100,
                backgroundColor:"red",
                borderRadius:5,
                marginLeft:150,
                height:50
            }}
            >
                <Text style={{
                    color:"white"
                }}>
                    Submit
                </Text>

            </Pressable>
        </View>
    );
}