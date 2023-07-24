import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

function CurrentBalance() {
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
      <Text style={styles.text}>Backend Work in Progress...</Text>
    </View>
  );
}

export default CurrentBalance;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
  },
  iconBack: {
    color: "black",
    fontSize: 24,
    marginTop: 60,
    marginLeft: 340,
    fontWeight: "bold",
  },
  text: {
    marginTop: 60,
    marginLeft: 100,
    marginTop: 300,
  },
});
