import { Dimensions, Image, View, Platform } from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-elements";
import IconMI from "react-native-vector-icons/MaterialIcons";

export default function SignUpFifth(props) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        top: "5%",
      }}
    >
      <Button
        title="Click here"
        titleStyle={{ color: "#bbb7ff" }}
        buttonStyle={{ backgroundColor: "transparent", borderColor: "#6c63fe", borderWidth: 1, borderRadius: 50 }}
        onPress={pickImage}
      />
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: "50%", height: "50%", top: "10%", borderWidth: 3, borderColor: "#6c63fe", borderRadius: 50 }}
        />
      )}
    </View>
  );
}
