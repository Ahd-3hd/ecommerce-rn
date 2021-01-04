import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home";
import Sales from "../../screens/Sales";
import New from "../../screens/New";
import Clothes from "../../screens/Clothes";
import Accessories from "../../screens/Accessories";
import Product from "../../screens/Product";
import Reviews from "../../screens/Reviews";

const HomeStackNavigator = createStackNavigator();

export default () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name="Home" component={Home} />
      <HomeStackNavigator.Screen name="Sales" component={Sales} />
      <HomeStackNavigator.Screen name="New" component={New} />
      <HomeStackNavigator.Screen name="Clothes" component={Clothes} />
      <HomeStackNavigator.Screen name="Accessories" component={Accessories} />
      <HomeStackNavigator.Screen name="Product" component={Product} />
      <HomeStackNavigator.Screen name="Reviews" component={Reviews} />
    </HomeStackNavigator.Navigator>
  );
};
