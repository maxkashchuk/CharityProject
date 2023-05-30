import { View, Animated, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainPosts from "../main/MainPosts";
import AddPosts from "../main/AddPost";
import ManagePosts from "../main/ManagePosts";
import IconP from "react-native-vector-icons/Foundation";
import IconPADD from "react-native-vector-icons/Foundation";
import { useRef } from "react";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation(props) {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  function getWidth() {
    let width = Dimensions.get("window").width;
    width = width - 40;
    return width / 5;
  }

  return (
    <View style={{ height: "91%" }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            elevation: 0,
            backgroundColor: "#6c63fe",
            height: 90,
          },
        }}
        sceneContainerStyle={{}}
        tabBarOptions={{ showLabel: false }}
        initialRouteName="Posts"
      >
        <Tab.Screen
          name="Posts"
          children={() => <MainPosts navigation={props.navigation} />}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <IconP name="page-multiple" size={40} color="white" />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="AddPost"
          children={() => <AddPosts navigation={props.navigation} />}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <IconPADD name="page-add" size={40} color="white" />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 1.85,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="ManagePosts"
          children={() => <ManagePosts navigation={props.navigation} />}
          options={{
            unmountOnBlur: true,
            tabBarIcon: ({ focused }) => (
              <View>
                <IconPADD name="clipboard-notes" size={40} color="white" />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3.7,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getWidth(),
          height: 5,
          backgroundColor: "#bbb7ff",
          position: "absolute",
          bottom: 80,
          left: 30,
          borderRadius: 40,
          transform: [{ translateX: tabOffsetValue }],
        }}
      />
    </View>
  );
}
