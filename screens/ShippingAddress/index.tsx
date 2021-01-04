import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ShippingAddress = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ShippingAddress Screen</Text>
    </View>
  );
};

export default ShippingAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
