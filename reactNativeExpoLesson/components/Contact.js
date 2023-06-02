import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { gStyle } from "../styles/styles";

export default function Contact() {
  useEffect(() => {
    console.log("Contact ");
  }, []);

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Haqqımızda Səhifəsi</Text>
    </View>
  );
}
