import 'react-native-gesture-handler';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import PostInfo from './components/postcards/PostInfo';
import Profile from './components/Profile';
import PostUpdate from './components/PostUpdate';
// import {LogBox} from 'react-native';

// LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor="rgba(255,255,255,0)"
        animated={true}
      />
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="PostInfo" component={PostInfo} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="PostUpdate" component={PostUpdate} />
      </Stack.Navigator>
    </NavigationContainer>    
  );
}
