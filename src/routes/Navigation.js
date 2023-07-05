import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import PinScreen from "../screens/Pinscreen/PinScreen";
// import HomeScreen from "../screens/HomeScreen";
// import OtpScreen from "../screens/OtpScreen";
import MainScreen from "../screens/MainScreen/MainScreen";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pin"
        component={PinScreen}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
};

export default Navigation;
