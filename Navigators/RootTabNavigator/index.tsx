import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "../HomeStackNavigator";
import Shop from "../../screens/Shop";
import Bag from "../../screens/Bag";
import Favorites from "../../screens/Favorites";
import Profile from "../../screens/Profile";

const RootTabNavigator = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <RootTabNavigator.Navigator>
        <RootTabNavigator.Screen name="Home" component={HomeNavigator} />
        <RootTabNavigator.Screen name="Shop" component={Shop} />
        <RootTabNavigator.Screen name="Bag" component={Bag} />
        <RootTabNavigator.Screen name="Favorites" component={Favorites} />
        <RootTabNavigator.Screen name="Profile" component={Profile} />
      </RootTabNavigator.Navigator>
    </NavigationContainer>
  );
};
