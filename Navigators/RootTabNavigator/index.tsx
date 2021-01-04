import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "../HomeStackNavigator";
import ShopNavigator from "../ShopStackNavigator";
import BagNavigator from "../BagStackNavigator";
import FavoritesNavigator from "../FavoritesStackNavigator";
import Profile from "../../screens/Profile";

const RootTabNavigator = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <RootTabNavigator.Navigator>
        <RootTabNavigator.Screen name="Home" component={HomeNavigator} />
        <RootTabNavigator.Screen name="Shop" component={ShopNavigator} />
        <RootTabNavigator.Screen name="Bag" component={BagNavigator} />
        <RootTabNavigator.Screen name="Bag" component={FavoritesNavigator} />
        <RootTabNavigator.Screen name="Profile" component={Profile} />
      </RootTabNavigator.Navigator>
    </NavigationContainer>
  );
};
