import { SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "react-native";
import BottomTabNavigation from "./navigators/BottomTabNavigation";
import Profile from "./Profile";
import { useEffect, useState } from "react";

export default function Main(props) {
  async function RemoveId() {
    console.log("NIHUA SOBI");
    await AsyncStorage.removeItem("UserID");
  }

  async function GetId() {
    console.log("Sobi Nihua");
    console.log(JSON.parse(await AsyncStorage.getItem("UserID")));
  }

  return (
    <SafeAreaView
      style={{
        position: "absolute",
        flex: 1,
        width: "100%",
        height: "110%",
      }}
    >
      <StatusBar hidden />
      <BottomTabNavigation navigation={props.navigation} />
    </SafeAreaView>
  );
}
