import React from "react";
import { View, Text } from "react-native";
import { gStyle } from "../styles/styles";

export default function FullInfo({ route }) {
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text style={{ marginTop: 15, fontStyle: "italic" }}>
        {route.params.full}
      </Text>
    </View>
  );
}
