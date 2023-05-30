import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  Platform,
} from "react-native";

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

  const handlePressAlertBtn = () => {
    alert("Alert Clicked");
  };

  const handlePressAlertComponentAlertBtn = () => {
    // Platform bize hansi device-de oldugumuzu bilmeye komek edir
    if (Platform.OS === "web") {
      alert("Alert Component Alert Btn Clicked On Web");
    } else {
      Alert.alert(
        "Title Alert",
        "Msg: Alert Component Alert Btn Clicked On Other Device",
        [
          { text: "Təstiq", onPress: () => console.log("Qəbul edildi") },
          { text: "İmtina", onPress: () => console.log("Leğv edildi") },
        ]
      );
    }
  };

  const handlePressAlertComponentPromptBtn = () => {
    if (Platform.OS === "web") {
      const text = prompt(
        "Alert Component Prompt Btn Clicked On Web",
        "Default Text"
      );
      if (text) {
        console.log("====================================");
        console.log("text: ", text);
        console.log("====================================");
      } else {
        console.log("Canceled");
      }
    } else {
      // Alert.prompt -> Androidde islemir.
      Alert.prompt(
        "Title Prompt",
        "Msg: Alert Component Prompt Btn Clicked On Other Device",
        (text) => console.log(text)
      );
    }
  };

  return (
    // SafeAreaView - misal iPhone-da gorunus cercivesinde olsun,
    //kameranin altina, ekranin qovsu altina dusmesin.
    <SafeAreaView style={styles.container}>
      {/* View -> div */}
      <View>
        {/* Text -> p */}
        <Text>
          Example Text {"(like -> p)"} in View {"(like -> div)"}
        </Text>
      </View>

      {/* alt alta yazilmasi ucun ya asagidaki kimi iki Text componentinden istifade edirik, */}
      <Text>Hello1.1!</Text>
      <Text>Hello1.2!</Text>

      {/* ya da xususi simvollarla: */}
      <Text>Hello2.1! {"\n"}Hello2.2!</Text>

      {/* numberOfLine atributuna 1 sayi versek ise hemin Text-deki sadece 1ci line da olan gorunecek ios-da, 
      web de ise digerlerini de yanyana getirecek: */}
      <Text numberOfLines={1}>
        Hello3.1! {"\n"}Hello3.2! {"\n"}Hello3.3!
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
      <Text>{"\n"}</Text>

      {/* Alert function */}
      <Button title="Alert Btn" onPress={handlePressAlertBtn} />
      <Text>{"\n"}</Text>

      {/* Alert Component alert function */}
      <Button
        title="Alert Component alert Btn"
        onPress={handlePressAlertComponentAlertBtn}
      />
      <Text>{"\n"}</Text>

      {/* Alert Component prompt function */}
      <Button
        title="Alert Component prompt Btn"
        onPress={handlePressAlertComponentPromptBtn}
      />
      <Text>{"\n"}</Text>

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
