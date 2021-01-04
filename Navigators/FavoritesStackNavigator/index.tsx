import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Product from "../../screens/Product";
import Reviews from "../../screens/Reviews";
import Favorites from "../../screens/Favorites";

const FavoriteStackNavigator = createStackNavigator();

export default () => {
  return (
    <FavoriteStackNavigator.Navigator>
      <FavoriteStackNavigator.Screen name="Favorites" component={Favorites} />
      <FavoriteStackNavigator.Screen name="Product" component={Product} />
      <FavoriteStackNavigator.Screen name="Reviews" component={Reviews} />
    </FavoriteStackNavigator.Navigator>
  );
};
