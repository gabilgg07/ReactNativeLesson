import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { gStyle } from "../styles/styles";
import mainStyles from "../styles/mainStyles";

export default function Main({ navigation }) {
  //   const loadScene = () => {
  //     navigation.navigate("Contact");
  //   };
  const [news, setNews] = useState([
    {
      key: "1",
      name: "Google",
      anons: "Google!!!",
      full: "Google is cool!",
      img: "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHx8fDE2ODU2OTc2NzV8MA&ixlib=rb-4.0.3&q=85",
    },
    {
      key: "2",
      name: "Apple",
      anons: "Apple!!!",
      full: "Apple is cool!",
      img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
    },
    {
      key: "3",
      name: "Facebook",
      anons: "Facebook!!!",
      full: "Facebook is cool!",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
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
            <View style={mainStyles.card}>
              <View
                style={{
                  //   marginBottom: 10,
                  borderBottomWidth: 2,
                  borderColor: "#888",
                }}
              >
                <Text style={mainStyles.name}>
                  {item.name} -{" "}
                  <Text style={mainStyles.anons}>{item.anons}</Text>
                </Text>
              </View>
              <Image
                source={{
                  width: "100%",
                  height: 200,
                  uri: item.img,
                }}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
