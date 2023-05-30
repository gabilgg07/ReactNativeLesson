import React from "react";
import { Text, TouchableHighlight } from "react-native";

import stylesListItem from "./stylesListItem";

export default function ListItem({ el }) {
  return (
    <TouchableHighlight>
      <Text style={stylesListItem.text}>{`${el.index}. ${el.text}`}</Text>
    </TouchableHighlight>
  );
}
