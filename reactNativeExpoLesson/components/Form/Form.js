import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

import stylesForm from "./stylesForm";

export default function Form({ addHandler }) {
  const [text, setText] = useState("");
  const handleOnChange = (text) => {
    setText(text);
  };

  const handleAddToDo = () => {
    addHandler(text);
    setText("");
  };
  return (
    <View style={stylesForm.main}>
      <TextInput
        style={stylesForm.input}
        onChangeText={handleOnChange}
        placeholder="Nə edəcəksiz?"
        clearButtonMode="always"
        value={text}
      />
      <View style={stylesForm.btn}>
        <Button title="Əlavə et" color="violet" onPress={handleAddToDo} />
      </View>
    </View>
  );
}
