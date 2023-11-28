import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/views/Home";
import Details from "./src/views/Details";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TabBarTop from "@react-navigation/material-top-tabs/lib/typescript/src/views/MaterialTopTabBar";
import Login from "./src/views/Login";
import Signup from "./src/views/Signup";

const TopTab = createMaterialTopTabNavigator();
export default function App() {
  return (
    // <Details />
    <NavigationContainer>
      <TopTab.Navigator>
        <TopTab.Screen
          name="Login"
          component={Login}
          options={{ title: "LOGIN" }}
        />
        <TopTab.Screen name="Sign Up" component={Signup} />
      </TopTab.Navigator>
    </NavigationContainer>
  );
}
