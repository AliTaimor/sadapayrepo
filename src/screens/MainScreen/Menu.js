import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import NavBottom from "./NavBottom";
import { Ionicons } from "@expo/vector-icons";

function Menu() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View styles={styles.cardsView}>
          <View style={styles.cardProfile}>
            <Ionicons name="ios-person" style={styles.profileIcon} />

            <Text style={styles.ProfileText}>Profile</Text>
          </View>

          <View style={styles.cardBusiness}>
            <Ionicons name="ios-briefcase-sharp" style={styles.profileIcon} />

            <Text style={styles.businessText}>Open a business account</Text>
          </View>

          <View style={styles.cardLimit}>
            <Text style={styles.limitText}>Limit</Text>
          </View>

          <View style={styles.cardIncrease}>
            <Text style={styles.increaseText}>Increase my Limit</Text>
          </View>

          <View style={styles.cardRewards}>
            <Text style={styles.rewardsText}>Rewards</Text>
          </View>

          <View style={styles.cardRewards}>
            <Text style={styles.rewardsText}>Chat with support</Text>
          </View>
          <View style={styles.cardRewards}>
            <Text style={styles.rewardsText}>Info</Text>
          </View>
        </View>
      </ScrollView>

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
  },
  cardsView: {
    flexDirection: "column",
    alignItems: "center",
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
  },
  cardProfile: {
    flexDirection: "row",
    width: 370,
    height: 70,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    marginTop: 75,
    marginLeft: 10,
  },
  ProfileText: {
    fontSize: 20,
    marginLeft: 20,
  },
  profileIcon: {
    fontSize: 30,
    marginLeft: 10,
  },
  cardBusiness: {
    backgroundColor: "lightgrey",
    marginTop: 20,
    flexDirection: "row",
    height: 100,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 30,
    marginLeft: 10,
    width: 370,
  },
  businessText: {
    fontSize: 14,
    marginLeft: 20,
    color: "white",
    fontWeight: "bold",
  },
  cardLimit: {
    backgroundColor: "white",
    flexDirection: "row",
    height: 160,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 30,
    marginLeft: 10,
    width: 370,
  },
  limitText: {
    fontSize: 20,
    marginLeft: 20,
  },
  cardIncrease: {
    backgroundColor: "white",
    flexDirection: "row",
    height: 100,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 26,
    marginLeft: 10,
    width: 370,
  },
  increaseText: {
    fontSize: 20,
    marginLeft: 20,
  },
  cardRewards: {
    backgroundColor: "white",
    flexDirection: "row",
    height: 160,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 30,
    marginLeft: 10,
    width: 370,
  },

  rewardsText: {
    fontSize: 20,
    marginLeft: 20,
  },
});

export default Menu;
