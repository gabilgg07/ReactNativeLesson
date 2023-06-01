import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  examplStyle: {
    color: "red",
  },
  box: {
    padding: 20,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  myText: {
    fontSize: 26,
    fontWeight: "bold",
  },
  txtRed: {
    color: "#ee1313",
  },
  txtBox: {
    marginTop: 10,
    marginBottom: 10,
    width: 150,
    height: 150,
    backgroundColor: "#3a6952",
    // textAlign: "center",
    // lineHeight: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: 28,
  },
  mainBlock: {
    height: 600,
    backgroundColor: "#0000001f",
    marginBottom: 20,
  },
  blockBox: {
    flex: 3,
  },
  blockBox1: {
    backgroundColor: "#00acff",
  },
  blockBox2: {
    backgroundColor: "#ff0023",
  },
  blockBox3: {
    backgroundColor: "#16bf4f",
  },
  mainBlock2: {
    height: 600,
    backgroundColor: "#0000001f",
    marginBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowBlock: {
    width: 100,
    height: 100,
  },
});

export default styles;
