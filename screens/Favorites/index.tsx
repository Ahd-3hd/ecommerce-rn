import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Favorites = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorites Screen</Text>
    </View>
  );
};

export default Favorites;

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
