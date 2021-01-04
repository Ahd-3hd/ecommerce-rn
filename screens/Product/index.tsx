import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Product = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product Screen</Text>
    </View>
  );
};

export default Product;

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
