import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Home";
import Chat from "../Chat";
import Resistor from "../Resistor";
import Clipboard from "../Clipboard";
import Delete from "../Delete";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-paper";

const Tab = createBottomTabNavigator();
const colo = "#ea1179";

const Details = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => {
              return <Icon source="home" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => {
              return <Icon source="chat" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Resistor"
          component={Resistor}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => {
              return <Icon source="resistor" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Clip Board"
          component={Clipboard}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => {
              return <Icon source="clipboard" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Delete"
          component={Delete}
          options={{
            tabBarLabel: " ",
            tabBarIcon: ({ color, size }) => {
              return <Icon source="delete" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Details;
