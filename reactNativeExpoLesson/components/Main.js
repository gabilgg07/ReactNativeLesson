import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { gStyle } from "../styles/styles";

export default function Main({ navigation }) {
  //   const loadScene = () => {
  //     navigation.navigate("Contact");
  //   };
  const [news, setNews] = useState([
    { name: "Google", anons: "Google!!!", full: "Google is cool!" },
    { name: "Apple", anons: "Apple!!!", full: "Apple is cool!" },
    { name: "Facebook", anons: "Facebook!!!", full: "Facebook is cool!" },
  ]);

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Ana Səhifə</Text>
      {/* <Button title="Səhifəni Açmaq" onPress={loadScene} /> */}
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Text
              style={{
                marginBottom: 10,
                textAlign: "center",
                padding: 8,
                borderWidth: 1,
                borderColor: "#888",
                borderRadius: 4,
              }}
            >
              {item.name} -{" "}
              <Text style={{ fontStyle: "italic" }}>{item.anons}</Text>
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
