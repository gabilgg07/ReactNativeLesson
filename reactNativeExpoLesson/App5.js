import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, FlatList } from "react-native";
import styles from "./styles";
import Header from "./components/Header/Header";
import ListItem from "./components/ListItem/ListItem";
import Form from "./components/Form/Form";

export default function App() {
  let count = 5;
  const [listOfItems, setListOfItems] = useState([
    { key: "1", text: "Süd almaq" },
    { key: "2", text: "Kartof almaq" },
    { key: "3", text: "Kod yazmaq" },
    { key: "4", text: "Php öyrənmək" },
  ]);

  const addHandler = (text) => {
    if (text) {
      setListOfItems((list) => {
        return [
          { key: Math.random().toString(36).substring(7), text: text },
          ...list,
        ];
      });
    }
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItem) => listOfItem.key != key);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Header />
        <Form addHandler={addHandler} />
        <View>
          <FlatList
            data={listOfItems}
            renderItem={({ item }) => (
              <ListItem el={item} deleteHandler={deleteHandler} />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
