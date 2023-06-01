import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { gStyle } from "./styles/styles";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Main from "./components/Main";

const fonts = () =>
  Font.loadAsync({
    "mt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "mt-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "mt-light": require("./assets/fonts/Montserrat-Light.ttf"),
  });

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await fonts();
        setLoadingComplete(true);
        await SplashScreen.hideAsync();
      } catch (error) {
        console.warn(error);
      }
    }

    prepare();
  }, []);

  if (!isLoadingComplete) {
    return null; // or render a loading component if desired
  }

  return (
    <ScrollView style={gStyle.main}>
      <Main />
    </ScrollView>
  );
}
