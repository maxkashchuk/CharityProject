import { useState } from "react";
import { SafeAreaView, Dimensions, View, Text } from "react-native";
import OutlineInput from "react-native-outline-input";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";

export default function SignUpFourth(props) {
  let [nickname, setNickname] = useState("");

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
            value={nickname}
            onChangeText={(e) => nicknameSet(e)}
            label="Nickname"
            activeValueColor="#6c63fe"
            activeBorderColor="#6c63fe"
            activeLabelColor="#6c63fe"
            passiveBorderColor="#bbb7ff"
            passiveLabelColor="#bbb7ff"
            passiveValueColor="#bbb7ff"
          />
        </View>
        
        <View style={{flexDirection: "row", top: "10%", justifyContent: "center"}}>
          <Text style={{right: "5%"}}>
            {<IconMCI name="form-textbox" size={21} color="#6c63fe" />}
          </Text>
          <Text style={{fontSize: 16, color: "#6c63fe"}}>
            Your nickname will be 
          </Text>
        </View>
        <View style={{top: "60%"}}>
        <Text style={{fontSize: 24, fontStyle: "italic", fontWeight: "bold", color: "#bbb7ff", alignSelf: "center"}}>
            {" " + nickname}
          </Text>
        </View>
        
      </View>
    </SafeAreaView>
  );
}
