import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Clothes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Clothes Screen</Text>
    </View>
  );
};

export default Clothes;

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
