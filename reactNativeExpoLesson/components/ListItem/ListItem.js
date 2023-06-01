import React from "react";
import { Text, TouchableOpacity } from "react-native";

import stylesListItem from "./stylesListItem";

export default function ListItem({ el, deleteHandler }) {
  return (
    <TouchableOpacity onPress={() => deleteHandler(el.key)}>
      <Text style={stylesListItem.text}>{`${el.text}`}</Text>
    </TouchableOpacity>
  );
}
