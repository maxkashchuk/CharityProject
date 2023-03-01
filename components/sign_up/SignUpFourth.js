import { useState } from "react";
import { SafeAreaView, Dimensions, View, Text } from "react-native";
import OutlineInput from "react-native-outline-input";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";

export default function SignUpFourth(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  //let [nickname, setNickname] = useState("");

  function nicknameSet(e)
  {
    if(e.length <= 20)
    {
      setNickname(e);
    }
  }

  return (
    <SafeAreaView
      style={{
        position: "absolute",
        flex: 1,
        width: "100%",
        top: "45%",
        height: Dimensions.get("window").height,
      }}
    >
      <View>
        <View>
        <OutlineInput
            value={name}
            onChangeText={(e) => setName(e)}
            label="Name"
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
            value={surname}
            onChangeText={(e) => setSurname(e)}
            label="Surname"
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
