import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

function ScreenThree() {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.backView}>
        <TouchableWithoutFeedback activeOpacity={0.5} onPress={handleBackPress}>
          <Ionicons name="close" style={styles.iconBack} />
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.title}>Money Request</Text>
      <View style={styles.centerView}>
        <Ionicons name="moon-outline" style={styles.iconzzz} />
        <Text style={styles.centerText}>No pending requests</Text>
        <Text style={styles.centerTextTwo}>
          Money requests from other sadapay users will appear here
        </Text>
      </View>
    </View>
  );
}

export default ScreenThree;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
  },
  iconBack: {
    color: "black",
    fontSize: 24,
    marginTop: 80,
    marginLeft: 340,
    fontWeight: "bold",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 40,
    marginLeft: 30,
  },
  centerView: {
    flexDirection: "column",
    marginTop: 190,
    alignItems: "center",
  },
  iconzzz: {
    fontSize: 50,
    marginLeft: 10,
    color: "blue",
  },
  centerText: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 40,
  },
  centerTextTwo: {
    color: "grey",
    fontSize: 15,
    alignItems: "center",
  },
});
