import React from "react";
import { StyleSheet, Text, View } from "react-native";

function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleOne}>Work in progress!!!</Text>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#94bbe9",
    alignItems: "center",
    justifyContent: "center",
  },
  titleOne: {
    color: "black",
  },
});
