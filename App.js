import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import NotificationsScreen from "./components/menu_components/Notification";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function Drawer() {
  return(
    <Drawer.Navigator initialRouteName="Drawer">
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}

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
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}