import {
  SafeAreaView,
  ImageBackground,
  Dimensions,
  View,
  Text,
} from "react-native";
import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignUpFirst from "../sign_up/SignUpFirst";
import SignUpSecond from "../sign_up/SignUpSecond";
import SignUpThird from "../sign_up/SignUpThird";
import SignUpFourth from "../sign_up/SignUpFourth";
import SignUpFifth from "../sign_up/SignUpFifth";
import { Button } from "react-native-elements";
import * as Progress from "react-native-progress";
import { reg_styles } from "../styles/SignUpStyles";
import IconMI from "react-native-vector-icons/MaterialIcons";
import { TabActions } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

let pages = 1;

export default function SignUpNavigation(props) {

  let [complete, setComplete] = useState(0.2);

  const SUFIR = TabActions.jumpTo("SignUpFirst");

  const SUSEC = TabActions.jumpTo("SignUpSecond");

  const SUTHI = TabActions.jumpTo("SignUpThird");

  const SUFOU = TabActions.jumpTo("SignUpFourth");

  const SUFIF = TabActions.jumpTo("SignUpFifth");

  function tabNavigation(e, id) {
    switch (id) {
      case 1:
        pages -= 1;
        break;
      case 2:
        if(pages < 5 )
        {
          pages += 1;
        }
        break;
    }
    switch (pages) {
      case 0:
        {
          pages = 1;
          setComplete(0);
          props.navigation.goBack();
        }
        break;
      case 1:
        {
          setComplete(0.2);
          props.navigation.dispatch(SUFIR);
        }
        break;
      case 2:
        {
          setComplete(0.4);
          props.navigation.dispatch(SUSEC);
        }
        break;
      case 3:
        {
          setComplete(0.6);
          props.navigation.dispatch(SUTHI);
        }
        break;
      case 4:
        {
          setComplete(0.8);
          props.navigation.dispatch(SUFOU);
        }
        break;
      case 5:
        {
          setComplete(1);
          props.navigation.dispatch(SUFIF);
        }
        break;
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        position: "absolute",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
    >
      <ImageBackground
        style={{ width: "100%", height: "100%", flex: 1 }}
        imageStyle={{ width: "100%", height: "110%" }}
        source={require("../images/background.gif")}
      >
        <View style={reg_styles.reg_form_style}>
          <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: "transparent" }}
            initialRouteName="SignUpFirst"
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: "rgba(0,0,0,0)",
              tabBarShowLabel: false,
              tabBarInactiveTintColor: "rgba(0,0,0,0)",
              tabBarStyle: {
                backgroundColor: "rgba(255,255,255,0)",
                elevation: 0,
                top: "11%",
              },
            }}
          >
            <Tab.Screen name="SignUpFirst" component={SignUpFirst} />
            <Tab.Screen name="SignUpSecond" component={SignUpSecond} />
            <Tab.Screen name="SignUpThird" component={SignUpThird} />
            <Tab.Screen name="SignUpFourth" component={SignUpFourth} />
            <Tab.Screen name="SignUpFifth" component={SignUpFifth} />
          </Tab.Navigator>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              titleStyle={reg_styles.reg_btn_title_style}
              buttonStyle={
                (reg_styles.reg_btn_border_style,
                { alignSelf: "flex-start", width: "50%", borderRadius: 30 })
              }
              title={<IconMI name="arrow-back-ios" size={25} color="#bbb7ff" />}
              type="outline"
              onPress={(e) => tabNavigation(e, 1)}
            />
            <Button
              titleStyle={reg_styles.reg_btn_title_style}
              buttonStyle={
                (reg_styles.reg_btn_border_style,
                { alignSelf: "flex-end", width: "50%", borderRadius: 30 })
              }
              title={
                <IconMI name="arrow-forward-ios" size={25} color="#bbb7ff" />
              }
              type="outline"
              onPress={(e) => tabNavigation(e, 2)}
            />
          </View>
          <Progress.Circle
            showsText={true}
            size={150}
            progress={complete}
            strokeCap="round"
            thickness={12.5}
            color="rgba(108, 99, 254, 1)"
            style={{ alignSelf: "center" }}
          ></Progress.Circle>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
