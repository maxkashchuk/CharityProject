import {
  SafeAreaView,
  ImageBackground,
  View,
  Dimensions,
  Text,
  Platform
} from "react-native";
import { reg_styles, reg_svg_style } from "./styles/SignInStyles";
import Svg, { Path } from "react-native-svg";
import { useState } from "react";
import OutlineInput from "react-native-outline-input";
import { Button } from "react-native-elements";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconMI from "react-native-vector-icons/MaterialIcons";
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navbarHeight = Dimensions.get('screen').height - Dimensions.get('window').height;

  function pasSet(e) {
    let str = "";
    for (let i = 0; i < e.length; i++) {
      str += "•";
    }
    setPassword(str);
  }

  function loadMain(e) {
    props.navigation.navigate("Main");
  }

  function loadSignUp(e) {
    props.navigation.navigate("SignUp");
  }

  return (
    <SafeAreaView
      style={{
        position: "absolute",
        flex: 1,
        width: "100%",
        height: Dimensions.get("window").height,
      }}
    >
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        imageStyle={{ width: "100%", height: "110%" }}
        source={require("./images/background.gif")}
      >
        <View>
        <View style={reg_styles.reg_background_style}>
          <View style={reg_styles.reg_form_style}>
            <View>
              <View>
                <OutlineInput
                  value={email}
                  onChangeText={(e) => setEmail(e)}
                  label="Email"
                  activeValueColor="#6c63fe"
                  activeBorderColor="#6c63fe"
                  activeLabelColor="#6c63fe"
                  passiveBorderColor="#bbb7ff"
                  passiveLabelColor="#bbb7ff"
                  passiveValueColor="#bbb7ff"
                />
              </View>
              <View style={{ top: "5%" }}>
                <OutlineInput
                  value={password}
                  onChangeText={(e) => pasSet(e)}
                  label="Password"
                  activeValueColor="#6c63fe"
                  activeBorderColor="#6c63fe"
                  activeLabelColor="#6c63fe"
                  passiveBorderColor="#bbb7ff"
                  passiveLabelColor="#bbb7ff"
                  passiveValueColor="#bbb7ff"
                ></OutlineInput>
              </View>
              <View
                style={{
                  top: (Dimensions.get("window").height / 100) * 3,
                  alignSelf: "center",
                }}
              >
                <Button
                  titleStyle={reg_styles.reg_btn_title_style}
                  buttonStyle={
                    (reg_styles.reg_btn_border_style,
                    { width: Dimensions.get("window").width / 100 * 44 })
                  }
                  title="Sign In"
                  type="outline"
                  onPress={(e) => loadMain(e)}
                  icon={
                    <IconFA
                      name="sign-in"
                      size={20}
                      color="#bbb7ff"
                      style={{ right: "20%" }}
                    />
                  }
                />
              </View>
              <View
                style={{
                  top: (Dimensions.get("window").height / 100) * 5,
                  left: "37%",
                }}
              >
                <Text
                  onPress={(e) => loadSignUp(e)}
                  
                  style={ 
                    reg_styles.reg_btn_title_style, 
                    reg_styles.reg_btn_border_style, 
                    { width: Dimensions.get("window").width / 100 * 30 }
                  }
                >
                  {<IconMI
                      name="app-registration"
                      size={15}
                      color="#bbb7ff"
                      style={{ right: "20%" }}
                    />} <Text style={{ color: "#bbb7ff" }}>Sign Up</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Svg
          width="100%"
          height="20%"
          viewBox="0 0 1440 320"
          style={{
            flex: 2,
            bottom: Platform.OS === "ios" ? Dimensions.get("window").height / 100 * 5.8 - getStatusBarHeight() : (Dimensions.get("window").height) / 100 * 13.65 - navbarHeight*1.425 - getStatusBarHeight(),
          }}
        >
          <Path fill="#5000ca" opacity="0.3" d={reg_svg_style} />
        </Svg>
        </View>
        <ImageBackground
          style={{ alignSelf: "center", width: Dimensions.get("window").width, height: "50%" }}
          source={require("./images/charity_logo.gif")}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}