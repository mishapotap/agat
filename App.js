import React from 'react'
import AppNavigator from './navigation/AppNavigator'
import { View, Text } from "react-native"
import 'react-native-gesture-handler';

export default function App() {
  return (
    <AppNavigator/>
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Text>Universal React with Expo</Text>
    // </View>
  );
}
