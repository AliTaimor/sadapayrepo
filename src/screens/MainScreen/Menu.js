import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavBottom from "./NavBottom";

function Menu() {
  return (
    <View style={styles.container}>
      <Text>We are currently working on this screen :)</Text>

      <View style={styles.bottomView}>
        <NavBottom />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
  },
});

export default Menu;
