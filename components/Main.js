import {
  SafeAreaView,
  ImageBackground,
  View,
  Dimensions,
  // Text,
  Platform
} from "react-native";
import { main_styles } from "./styles/MainStyles";
import Svg, { Path } from "react-native-svg";
import { useState } from "react";
import OutlineInput from "react-native-outline-input";
// import { Button } from "react-native-elements";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { StatusBar } from "expo-status-bar";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Input } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
// import DrawerNav from "../App";
// import DrawerNavigation from "./navigators/DrawerNavigation";

export default function Main(props) {

  function loadMain(e) {
    props.navigation.navigate("Main");
  }

  function loadSignUp(e) {
    props.navigation.navigate("SignUp");
  }

  function toggleDrawer()
  {
    props.navigation
  }

  function showSettings (e) {
    e.preventDefault();
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
      <StatusBar hidden={true}></StatusBar>
        <NativeBaseProvider>
            <Box safeAreaTop/>
              <HStack justifyContent="space-between" style={{backgroundColor: "#6c63fe"}} alignItems="center" width="100%">
                <HStack alignItems="center">
                  <IconButton
                  style={{marginLeft: "15%", backgroundColor: '#6c63fe'}}
                  icon={<Icon size={50} 
                  as={Ionicons} 
                  name="menu" 
                  color="white" />} />
                </HStack>
                <Input style={main_styles.input_search_style} variant="rounded" width={200} placeholder="Search"/>
                <Ionicons name="ios-search-circle-sharp" size={50} color="white" style={{ marginRight: "30%", marginLeft: "5%" }}/>
              </HStack>
            </NativeBaseProvider>
    </SafeAreaView>
  );
}