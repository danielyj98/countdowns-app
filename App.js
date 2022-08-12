import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";

const MainStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home}/>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
