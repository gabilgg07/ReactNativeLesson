import React from "react";
import { View, Text, Image } from "react-native";
import { gStyle } from "../styles/styles";
import infoStyle from "../styles/infoStyle";

export default function FullInfo({ route }) {
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text style={infoStyle.full}>{route.params.full}</Text>
      <Image
        source={{ uri: route.params.img }}
        style={[
          gStyle.image,
          {
            borderRadius: 10,
          },
        ]}
      />
    </View>
  );
}
