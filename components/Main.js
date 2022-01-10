import { SafeAreaView, ImageBackground, Dimensions } from "react-native";

export default function Main(props) {
  return (
    <SafeAreaView
      style={{
        position: "absolute",
        flex: 1,
        width: "100%",
        height: "110%",
      }}
    >
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        imageStyle={{ width: "100%", height: "100%" }}
        source={require("./images/background.gif")}
      ></ImageBackground>
    </SafeAreaView>
  );
}