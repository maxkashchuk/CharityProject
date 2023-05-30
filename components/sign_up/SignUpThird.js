import { SafeAreaView, Dimensions } from "react-native";
import { useState } from "react";
import RadioButtonRN from "radio-buttons-react-native";
import IconI from "react-native-vector-icons/Ionicons";

export default function SignUpThird({ setGender }) {
  const data = [
    {
      label: "Male",
    },
    {
      label: "Female",
    },
  ];

  function genderSet(e) {
    setGender(e.label);
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
      <RadioButtonRN
        deactiveColor="transparent"
        textStyle={{ color: "#bbb7ff" }}
        boxStyle={{ borderColor: "#6c63fe" }}
        icon={<IconI name="ios-checkmark" size={25} color="#6c63fe" />}
        animationTypes={["pulse", "rotate"]}
        data={data}
        selectedBtn={(e) => genderSet(e)}
      />
    </SafeAreaView>
  );
}
