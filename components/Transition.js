import { useEffect } from "react";
import { ImageBackground, Text, View, Dimensions } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "react-native";

export default function Transition(props)
{

    useEffect(() => {
        (async () => {
            (JSON.parse(await AsyncStorage.getItem("UserID"))) === null
              ? props.navigation.replace("SignIn")
              : props.navigation.replace("Main");
        })();
        // async function checkSignIn() {
            
        //   }
        //   setTimeout(checkSignIn(), 8000)
      }, []);

    return(
        <View style={{backgroundColor: "#6c63fe", width: "100%", height: "100%"}}>
            <StatusBar hidden />
            <View style={{marginTop: 250}}>
            <ImageBackground
                style={{ alignSelf: "center" }}
                style={{ width: Dimensions.get("window").width, height: "60%" }}
                source={require("./images/charity_logo.gif")}
                />
            </View>
        </View>
    );
}