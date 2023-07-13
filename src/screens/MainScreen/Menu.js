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

            <Text style={styles.ProfileText}>Spartan</Text>
          </View>

          <View style={styles.cardBusiness}>
            <Ionicons name="ios-briefcase-sharp" style={styles.profileIcon} />

            <Text style={styles.businessText}>Open a business account</Text>
          </View>

          <View style={styles.cardLimit}>
            <Text style={styles.limitText}>Limit</Text>
            <View style={styles.cardInnerView}>
              <Text style={styles.innerTextOne}>Incomming</Text>
              <Text style={styles.innerTextTwo}> Rs. 50,000 left</Text>
            </View>
            <View style={styles.innerViewTwo}>
              <Text style={styles.innerViewThree}>
                Your Rs. 50k monthly limit resets on the 1st of next month
              </Text>
            </View>
          </View>

          <View style={styles.cardIncrease}>
            <View style={styles.increaseView}>
              <Ionicons name="wallet-outline" style={styles.profileIcon} />

              <Text style={styles.increaseText}>Increase my Limit</Text>
            </View>

            <Text style={styles.increaseTextTwo}>
              Verify your biometric to bump your limit to 400k PKR
            </Text>
          </View>

          <View style={styles.cardRewards}>
            <Text style={styles.rewardsText}>Rewards</Text>
            <View style={styles.rewardsView}>
              <Text style={styles.rewardsViewText}>Golden Tickets</Text>
              <Text style={styles.rewardsViewTextTwo}>
                {" "}
                Invite Friends to sadapay
              </Text>
            </View>
          </View>

          <View style={styles.cardChat}>
            <View style={styles.chatInnerView}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                style={styles.chatIcon}
              />

              <Text style={styles.chatText}>Chat with support</Text>
            </View>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.infoText}>Info</Text>
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
    fontWeight: "bold",
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
    height: 160,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 30,
    marginLeft: 10,
    width: 370,
  },
  limitText: {
    fontSize: 20,
    marginRight: 290,
    marginTop: 20,
  },
  cardInnerView: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 4,
    borderBottomColor: "red",
    borderBottomEndRadius: 30,
  },
  innerViewTwo: {
    marginTop: 30,
  },
  innerTextOne: {
    fontWeight: "bold",
    marginRight: 170,
    marginBottom: 10,
  },
  innerTextTwo: {
    fontWeight: "bold",
  },
  innerViewThree: {
    fontSize: 12,
    color: "grey",
  },
  cardIncrease: {
    backgroundColor: "white",
    height: 100,
    borderRadius: 20,
    marginTop: 26,
    marginLeft: 10,
    width: 370,
  },
  increaseView: {
    flexDirection: "row",
    marginTop: 20,
  },
  increaseText: {
    fontSize: 16,
    marginLeft: 20,
    fontWeight: "bold",
    marginTop: 7,
  },
  increaseTextTwo: {
    color: "grey",
    marginTop: 10,
    marginLeft: 20,
  },
  cardRewards: {
    backgroundColor: "white",
    height: 160,
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 10,
    width: 370,
  },

  rewardsText: {
    fontSize: 16,
    marginLeft: 20,
    fontWeight: "bold",
    marginTop: 7,
  },
  rewardsView: {
    flexDirection: "column",
    marginLeft: 20,
  },
  rewardsViewText: {
    marginTop: 50,
    marginLeft: 50,
    fontWeight: "bold",
  },
  rewardsViewTextTwo: {
    marginTop: 10,
    marginLeft: 48,
    fontWeight: "bold",
  },
  cardChat: {
    backgroundColor: "white",

    height: 100,
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 10,
    width: 370,
  },
  chatText: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 15,
    marginTop: 3,
  },
  chatInnerView: {
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 20,
  },
  chatIcon: {
    fontSize: 24,
  },
  cardInfo: {
    backgroundColor: "white",
    height: 160,
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 10,
    width: 370,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 20,
    fontWeight: "bold",
    marginTop: 7,
  },
});

export default Menu;
