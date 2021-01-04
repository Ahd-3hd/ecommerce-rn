import React from "react";
import { StyleSheet, View, Text } from "react-native";

const New = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>New Screen</Text>
    </View>
  );
};

export default New;

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
