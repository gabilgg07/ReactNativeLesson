import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, FlatList } from "react-native";
import styles from "./styles";
import Header from "./components/Header/Header";
import ListItem from "./components/ListItem/ListItem";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { index: 1, text: "Süd almaq" },
    { index: 2, text: "Kartof almaq" },
    { index: 3, text: "Kod yazmaq" },
    { index: 4, text: "Php öyrənmək" },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Header />
        <View>
          <FlatList
            data={listOfItems}
            renderItem={({ item }) => <ListItem el={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
