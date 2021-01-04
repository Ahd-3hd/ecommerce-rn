import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Checkout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Checkout Screen</Text>
    </View>
  );
};

export default Checkout;

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
