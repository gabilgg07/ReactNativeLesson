import React, { useEffect } from "react";
import "react-native-gesture-handler";

import Main from "./components/Main";
import Contact from "./components/Contact";
import FullInfo from "./components/FullInfo";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "Əsas" }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{ title: "Əlaqələr" }}
        />
        <Stack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{ title: "Tam Məlumat" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
