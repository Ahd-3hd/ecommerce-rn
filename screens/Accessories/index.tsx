import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Accessories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Accessories Screen</Text>
    </View>
  );
};

export default Accessories;

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
