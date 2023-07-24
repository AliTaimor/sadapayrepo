import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

function ScreenTwo() {
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

      <Text style={styles.mainTitle}>Bills and utilities</Text>
      <View style={styles.card}>
        <View style={styles.innerCardContent}>
          <Ionicons name="newspaper-outline" style={styles.iconOne} />
          <View>
            <Text style={styles.cardText}>New bill payments</Text>

            <Text style={styles.cardTextTwo}>
              Pay your bills to 900+ companies in Pakistan
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.centerView}>
        <Ionicons name="search" style={styles.iconTwo} />
        <Text style={styles.centerText}>No recent bills</Text>
        <Text style={styles.centerTextTwo}>
          Pay a new bill anytime to view here
        </Text>
      </View>
    </View>
  );
}

export default ScreenTwo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: "90%",
    height: 130,
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 110,
    borderRadius: 20,
    elevation: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  innerCardContent: {
    flexDirection: "row",
    marginLeft: "4%",
    marginTop: "10%",
  },
  iconOne: {
    fontSize: 42,
    color: "darkred",
    marginRight: "2%",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardTextTwo: {
    fontSize: 13,
    color: "grey",
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
    marginRight: 10,
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
