import { Image, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { Button } from "react-native-elements";

export default function SignUpFifth({ setImage }) {
  const [preview, setPreview] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(
        await FileSystem.readAsStringAsync(result.uri, { encoding: "base64" })
      );
      setPreview(result.uri);
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
        buttonStyle={{
          backgroundColor: "transparent",
          borderColor: "#6c63fe",
          borderWidth: 1,
          borderRadius: 50,
        }}
        onPress={pickImage}
      />
      {preview && (
        <Image
          source={{ uri: preview }}
          style={{
            width: "50%",
            height: "50%",
            top: "10%",
            borderWidth: 3,
            borderColor: "#6c63fe",
            borderRadius: 50,
          }}
        />
      )}
    </View>
  );
}
