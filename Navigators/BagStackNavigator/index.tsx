import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Product from "../../screens/Product";
import Bag from "../../screens/Bag";
import Reviews from "../../screens/Reviews";
import Checkout from "../../screens/Checkout";
import Payment from "../../screens/Payment";
import ShippingAddress from "../../screens/ShippingAddress";
import PaymentStatus from "../../screens/PaymentStatus";

const BagStackNavigator = createStackNavigator();

export default () => {
  return (
    <BagStackNavigator.Navigator>
      <BagStackNavigator.Screen name="Bag" component={Bag} />
      <BagStackNavigator.Screen name="Checkout" component={Checkout} />
      <BagStackNavigator.Screen name="Payment" component={Payment} />
      <BagStackNavigator.Screen
        name="ShippingAddress"
        component={ShippingAddress}
      />
      <BagStackNavigator.Screen
        name="PaymentStatus"
        component={PaymentStatus}
      />
      <BagStackNavigator.Screen name="Product" component={Product} />
      <BagStackNavigator.Screen name="Reviews" component={Reviews} />
    </BagStackNavigator.Navigator>
  );
};
