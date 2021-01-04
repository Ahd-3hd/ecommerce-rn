import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Shop from "../../screens/Shop";
import Sales from "../../screens/Sales";
import New from "../../screens/New";
import Clothes from "../../screens/Clothes";
import Accessories from "../../screens/Accessories";
import Product from "../../screens/Product";
import Reviews from "../../screens/Reviews";

const ShopStackNavigator = createStackNavigator();

export default () => {
  return (
    <ShopStackNavigator.Navigator>
      <ShopStackNavigator.Screen name="Shop" component={Shop} />
      <ShopStackNavigator.Screen name="Sales" component={Sales} />
      <ShopStackNavigator.Screen name="New" component={New} />
      <ShopStackNavigator.Screen name="Clothes" component={Clothes} />
      <ShopStackNavigator.Screen name="Accessories" component={Accessories} />
      <ShopStackNavigator.Screen name="Product" component={Product} />
      <ShopStackNavigator.Screen name="Reviews" component={Reviews} />
    </ShopStackNavigator.Navigator>
  );
};
