import { useState } from "react";
import { SafeAreaView, Dimensions, View } from "react-native";
import OutlineInput from "react-native-outline-input";

export default function SignUpFourth({ setEmail, setPassword }) {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");

  return (
    <SafeAreaView
      style={{
        position: "absolute",
        flex: 1,
        width: "100%",
        top: "42.5%",
        height: Dimensions.get("window").height,
      }}
    >
      <View>
        <View>
          <OutlineInput
            value={val1}
            onChangeText={(e) => {
              setEmail(e);
              setVal1(e);
            }}
            label="Email"
            activeValueColor="#6c63fe"
            activeBorderColor="#6c63fe"
            activeLabelColor="#6c63fe"
            passiveBorderColor="#bbb7ff"
            passiveLabelColor="#bbb7ff"
            passiveValueColor="#bbb7ff"
          />
        </View>
        <View style={{ top: "30%" }}>
          <OutlineInput
            value={val2}
            secureTextEntry={true}
            onChangeText={(e) => {
              setPassword(e);
              setVal2(e);
            }}
            label="Password"
            activeValueColor="#6c63fe"
            activeBorderColor="#6c63fe"
            activeLabelColor="#6c63fe"
            passiveBorderColor="#bbb7ff"
            passiveLabelColor="#bbb7ff"
            passiveValueColor="#bbb7ff"
          ></OutlineInput>
        </View>
      </View>
    </SafeAreaView>
  );
}
