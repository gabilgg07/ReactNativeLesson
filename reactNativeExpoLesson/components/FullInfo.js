import React from "react";
import { View, Text, Image, Platform } from "react-native";
import { gStyle } from "../styles/styles";
import infoStyle from "../styles/infoStyle";

export default function FullInfo({ route }) {
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <View
        style={{
          borderRadius: 10,
          ...Platform.select({
            ios: {
              shadowColor: "rgba(0, 0, 0, 1)",
              shadowOpacity: 0.8,
              shadowRadius: 5,
              shadowOffset: {
                height: 0,
                width: 0,
              },
            },
            android: {
              elevation: 5,
              backgroundColor: "rgba(0, 0, 0, 1)",
            },
            web: {
              boxShadow: "0 0 6px 2px black",
              overflow: "hidden",
              backgroundColor: "transparent",
            },
          }),
        }}
      >
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
      <Text style={infoStyle.full}>{route.params.full}</Text>
    </View>
  );
}
