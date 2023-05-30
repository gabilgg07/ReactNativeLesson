import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
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
        (text) => {
          if (text) {
            console.log(text);
          } else {
            console.log("Empty");
          }
        }
      );
    }
  };

  const handleImagePress = () => {
    console.log("Image Pressed");
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
      <Text style={styles.examplStyle}>Color Red Style Yoxlama</Text>

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

      <Text>{"\n Local Image \n\n"}</Text>
      {/* Image Component -> width, height-i olmasa web de gorunmur. 
      iphone de misal sekil oz olcusu qeder yer tutur. */}
      <Image
        source={require("./assets/adaptive-icon.png")}
        style={{ width: "50%", height: 200 }}
      />
      {/* source -> seklin local-daki adresini verirsen
      bunu da: require funksiyasi ile, path-ini oturerek */}

      <Text>{"\n Web Image with url \n\n"}</Text>
      {/* Image Component -> url source ile */}
      <Image
        blurRadius={3}
        source={{
          width: "50%",
          height: 200,
          uri: "https://scontent.fgyd8-1.fna.fbcdn.net/v/t1.6435-9/86192232_558235655035591_5186826467719249920_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9267fe&_nc_ohc=-XVtn1nQadwAX_X2dpc&_nc_oc=AQkfvVU_WKXLZ7g0TfT6Xn2Mvect0jJa8LqClyLjw30BcMNv0zGLNSnu368entbKzmw&_nc_ht=scontent.fgyd8-1.fna&oh=00_AfAk8kWvtA10kn-5qbRusq8GFy18xDO5aUI6r-XxaqNb1A&oe=649D3AAC",
        }}
        style={{
          alignSelf: "end",
        }}
      />
      {/* blurRadius -> sekile blurluq verir */}

      <Text>{"\n TouchableHighlight Component \n\n"}</Text>
      {/* TouchableHighlight Component -> sekile touch olunaa bilmesi ucun lazimdir. */}
      <TouchableHighlight onPress={handleImagePress}>
        <Image
          source={require("./assets/img/image_1.jpg")}
          style={{ width: "50%", height: 200 }}
        />
      </TouchableHighlight>

      <Text>{"\n TouchableWithoutFeedback Component \n\n"}</Text>
      {/* Default olaraq biz sekile press etdikde, TouchableHighlight componentin arxada sekile elave bir effekt verdiyini goruruk.
          Bezi hallarda bu hadise isteyimiz uzre yerine duse biler,
          amma indiki hall da istediyimiz kimi deyil, yeni bize lazim deyil. Buna gore:  TouchableWithoutFeedback istifade edirik*/}
      <TouchableWithoutFeedback onPress={handleImagePress}>
        <Image
          source={require("./assets/img/image_2.jpg")}
          style={{ width: "50%", height: 200, alignSelf: "end" }}
        />
      </TouchableWithoutFeedback>

      {/* <StatusBar style="auto" /> */}
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
