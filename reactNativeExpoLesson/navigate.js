import React from "react";
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
          options={{
            title: "Əsas",
            headerStyle: {
              backgroundColor: "#106b25c2",
              height: 80,
            },
            headerTitleStyle: {
              fontFamily: "mt-regular",
            },
          }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            title: "Əlaqələr",
            headerStyle: {
              backgroundColor: "#106b25c2",
              height: 80,
            },
            headerTitleStyle: {
              fontFamily: "mt-regular",
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{
            title: "Tam Məlumat",
            headerStyle: {
              backgroundColor: "#106b25c2",
              height: 80,
            },
            headerTitleStyle: {
              fontFamily: "mt-bold",
              color: "#000",
            },
            headerTintColor: "white",
            headerBackTitleStyle: {
              color: "white",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
