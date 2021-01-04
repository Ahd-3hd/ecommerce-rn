import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Shop = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shop Screen</Text>
    </View>
  );
};

export default Shop;

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
