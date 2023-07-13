import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
function ScreenOne() {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.backView}>
        <TouchableWithoutFeedback activeOpacity={0.5} onPress={handleBackPress}>
          <Ionicons name="arrow-back" style={styles.iconBack} />
        </TouchableWithoutFeedback>
      </View>

      <Text style={styles.mainTitle}>Mobile Top up</Text>
      <View style={styles.card}>
        <View style={styles.innerCardContent}>
          <Ionicons name="ios-phone-portrait" style={styles.iconOne} />
          <View>
            <Text style={styles.cardText}>New mobile top up</Text>

            <Text style={styles.cardTextTwo}>
              Top up any prepaid mobile network operator
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.centerView}>
        <Ionicons name="search" style={styles.iconTwo} />
        <Text style={styles.centerText}>No recent top ups</Text>
        <Text style={styles.centerTextTwo}>
          Top up a new number to view it here
        </Text>
      </View>
    </View>
  );
}

export default ScreenOne;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
  },
  card: {
    width: "90%",
    height: 130,
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 20,
    justifyContent: "center",
    marginTop: 110,
    borderRadius: 20,
  },
  innerCardContent: {
    flexDirection: "row",
    marginLeft: 10,
  },
  iconOne: {
    fontSize: 45,
    color: "darkred",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardTextTwo: {
    fontSize: 14,
    color: "grey",
    marginRight: 30,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 40,
    marginLeft: 30,
  },
  centerView: {
    flexDirection: "column",
    marginLeft: 100,
    marginRight: 30,
    marginTop: 130,
  },
  centerText: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 30,
  },
  centerTextTwo: {
    fontSize: 12,
    color: "grey",
    marginRight: 50,
  },
  iconTwo: {
    fontSize: 30,
    marginLeft: 75,
  },
  iconBack: {
    color: "black",
    fontSize: 24,
    marginTop: 80,
    marginLeft: 25,
    fontWeight: "bold",
  },
});
