// import { useState } from "react"
// import { TextInput, View, Text, Alert, Button } from "react-native"

// export default function App() {

//     const names = ["name1", "name2", "name3", "name4", "name5", "name6"]

//     return (
//         <View>
//             {names.map((item,index) => {
//                 return(
//                 <Text key={index}>{index + 1}. {item}</Text>
//             )
//             })}
//         </View>
//     )
// }

import { useState } from "react"
import { View, Text, TextInput, alert, Button } from "react-native"

export default function App() {
  const arrobject = [
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
  ]
  const arrobjects = [
  ];

  return (
    <View>
      {arrobject.filter((item, index) => {
        return index > 0;
      }).map((item, index) => {
          return (
            <View key={index}>
              <Text>
                {item.title}
                {/* {item.title} */}

              </Text>
            </View>
          )
        
      })
      }
    </View>
  );
}