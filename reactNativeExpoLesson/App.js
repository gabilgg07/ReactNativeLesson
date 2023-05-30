import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";

export default function App() {
  const handleTextPress = () => {
    console.log("====================================");
    console.log("On Press worked HandleTextPress");
    console.log("====================================");
  };
  const handlePressOrangeBtn = () => {
    console.log("====================================");
    console.log("On Press Orange Button worked HandlePressOrangeBtn");
    console.log("====================================");
  };

  return (
    // View -> div
    // <View style={styles.container}>

    // Text -> p
    //   <Text>Hello!</Text>
    //   <StatusBar style="auto" />
    // </View>

    // SafeAreaView - misal iPhone-da gorunus cercivesinde olsun,
    //kameranin altina, ekranin qovsu altina dusmesin.

    <SafeAreaView style={styles.container}>
      {/* alt alta yazilmasi ucun ya asagidaki kimi iki Text componentinden istifade edirik, */}
      <Text>Hello!</Text>
      <Text>Hello!</Text>

      {/* ya da xususi simvollarla: */}
      <Text>Hello2! {"\n"}Hello2!</Text>

      {/* numberOfLine atributuna 1 sayi versek ise hemin Text-deki sadece 1ci line da olan gorunecek ios-da, 
      web de ise digerlerini de yanyana getirecek: */}
      <Text numberOfLines={1}>
        Hello3! {"\n"}Hello3! {"\n"}Hello3!
      </Text>

      {/* style icine ancaq ya object sekinde parametrler otururuk,
    ya da objectlerden ibaret arrey seklinde */}
      <Text style={styles.examplStyle}>Style Yoxlama</Text>

      {/* her hansi bir component-in uzerine basdiqda
     bir is gormesi ucun: */}
      <Text onPress={() => console.log("Text Pressed")}>On Press Event</Text>
      {/* normal gorunus, yeni seliqe ucun ayrica function yaziriq: */}
      <Text onPress={handleTextPress}>Call handleTextPress</Text>

      {/* Button - icine hec bir component qoymuruq deye,
       safe closing tag yazmaq olar. 
       Her device de ferqli gorunur. */}
      <Button title="Press Me" />
      {/* title - icindeki yazi */}

      {/* color - button-un rengini secmek olur: */}
      <Button title="Press Me Red" color="red" />
      <Button title="Press Me #84c736" color="#84c736" />

      {/* Button-da onPress Event */}
      <Button
        title="Press Me Orange"
        color="orange"
        onPress={handlePressOrangeBtn}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// style-lar bu sekilde hazir objectde yazila bilinir.
// StyleSheet - icinde yazmagin ustunluyu sehv yazildiqda errorla bildirir, eks halda bildirmir.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  examplStyle: {
    color: "red",
  },
});
