import { SafeAreaView, Dimensions, View } from "react-native";
import OutlineInput from "react-native-outline-input";
import { useState } from "react";

export default function SignUpFirst(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function pasSet(e) {
    let str = "";
    for (let i = 0; i < e.length; i++) {
      str += "•";
    }
    setPassword(str);
  }
  
  return(
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
        <View style={{ top: "30%" }}>
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
      </View>
    </SafeAreaView>
  );
}