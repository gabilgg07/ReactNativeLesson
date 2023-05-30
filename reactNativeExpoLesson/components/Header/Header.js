import { Text, View } from "react-native";

import stylesHeader from "./stylesHeader";

export default function Header() {
  return (
    <View style={stylesHeader.main}>
      <Text style={stylesHeader.text}>To Do List</Text>
    </View>
  );
}
