import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { gStyle } from "../styles/styles";
import { Formik } from "formik";

export default function Form({ addArticle }) {
  return (
    <View>
      <Formik
        initialValues={{ name: "", anons: "", full: "", img: "" }}
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              value={props.values.name}
              placeholder="Ad daxil edin"
              onChangeText={props.handleChange("name")}
              style={styles.input}
            />
            <TextInput
              value={props.values.anons}
              multiline
              placeholder="Anons daxil edin"
              onChangeText={props.handleChange("anons")}
              style={styles.input}
            />
            <TextInput
              value={props.values.full}
              multiline
              placeholder="Məqalə daxil edin"
              onChangeText={props.handleChange("full")}
              style={styles.input}
            />
            <TextInput
              value={props.values.img}
              placeholder="Şəkil adresini daxil edin"
              onChangeText={props.handleChange("img")}
              style={styles.input}
            />
            <Button title="Əlavə et" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#4753ea",
    fontSize: 20,
  },
});
