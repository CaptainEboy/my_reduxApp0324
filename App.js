//Tutorial Link
//https://www.educative.io/answers/how-to-use-redux-toolkit-with-react-native
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { myStore } from "./store/store";
import { Provider } from "react-redux";
import HomeScreen from "./src/screens/Homescreen/HomeScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider store={myStore}>
      <App />
    </Provider>
  );
};


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { Provider } from 'react-redux';
// import { myStore } from './store/store';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './src/screens/Homescreen/HomeScreen';

// const Stack = createNativeStackNavigator();

// const AppRoot = () => {
//   return (
//     <NavigationContainer>
//        <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
   
//     // <View style={styles.container}>
//     //   <Text>Open up App.js to start working on your app!</Text>
//     //   <StatusBar style="auto" />
//     // </View>
//   );
// };

// export default function App() {
//   <Provider store={myStore}>
//     <AppRoot />
//   </Provider>
// };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });
