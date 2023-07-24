import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import NavBottom from "./NavBottom";
import { Ionicons } from "@expo/vector-icons";

function Menu() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.cardsView}>
          <View style={styles.cardProfile}>
            <Ionicons name="ios-person" style={styles.profileIcon} />

            <Text style={styles.ProfileText}>Spartan</Text>
          </View>

          <View style={styles.cardBusiness}>
            <Ionicons name="ios-briefcase-sharp" style={styles.businessIcon} />

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
              <Ionicons name="wallet-outline" style={styles.incIcon} />

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
            <View style={styles.rewardsView}>
              <Text style={styles.rewardsViewText}>Privacy Policy</Text>
              <Text style={styles.rewardsViewTextTwo}>
                Terms and Conditions
              </Text>
              <Text style={styles.rewardsViewTextTwo}>Schedule of charges</Text>
            </View>
          </View>
          <View style={styles.cardChat}>
            <View style={styles.chatInnerView}>
              <Ionicons name="ios-phone-portrait" style={styles.chatIcon} />

              <Text style={styles.chatText}>Manage devices</Text>
            </View>
          </View>
          <View style={styles.cardChat}>
            <View style={styles.chatInnerView}>
              <Ionicons name="ios-log-out" style={styles.chatIcon} />

              <Text style={styles.chatText}>Log Out</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomSpace} />
      </ScrollView>

      <View style={styles.bottomView}>
        <NavBottom />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  cardsView: {
    flexWrap: "wrap",
  },
  bottomSpace: {
    height: 100,
  },

  bottomView: {
    position: "absolute",
    bottom: 0,
  },
  cardProfile: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "flex-start",
    width: "94%",
    marginTop: "20%",
    marginLeft: "3%",
  },
  ProfileText: {
    fontSize: 20,
    marginLeft: "5%",
    fontWeight: "bold",
    marginTop: "6%",
  },
  profileIcon: {
    fontSize: 30,
    marginLeft: "4%",
    marginTop: "5%",
    color: "lightblue",
  },
  cardBusiness: {
    backgroundColor: "lightgrey",
    flexDirection: "row",
    height: 100,
    borderRadius: 20,
    alignItems: "center",
    width: "94%",
    marginLeft: "3%",
    marginTop: "7%",
  },
  businessText: {
    fontSize: 15,
    marginLeft: "5%",
    color: "white",
    fontWeight: "bold",
    marginTop: "2%",
  },
  businessIcon: {
    fontSize: 30,
    marginLeft: "4%",
    marginTop: "3%",
    color: "white",
  },
  cardLimit: {
    backgroundColor: "white",
    height: 160,
    borderRadius: 20,
    alignItems: "center",
    width: "94%",
    marginLeft: "3%",
    marginTop: "7%",
  },
  limitText: {
    fontSize: 15,
    marginRight: "80%",
    marginTop: "6%",
    color: "grey",
  },
  cardInnerView: {
    flexDirection: "row",
    marginTop: "5%",
    borderBottomWidth: 5,
    borderBottomColor: "red",
    borderBottomEndRadius: 30,
    justifyContent: "space-between",
  },
  innerViewTwo: {
    marginTop: "4%",
  },
  innerTextOne: {
    fontWeight: "bold",
    marginRight: "45%",

    marginBottom: "3%",
    justifyContent: "center",
    fontSize: 13,
  },
  innerTextTwo: {
    fontWeight: "bold",
    fontSize: 13,
  },
  innerViewThree: {
    fontSize: 12,
    color: "grey",
  },
  cardIncrease: {
    backgroundColor: "white",
    height: 100,
    borderRadius: 20,
    marginTop: "7%",
    marginLeft: "3%",
    width: "94%",
    elevation: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  increaseView: {
    flexDirection: "row",
  },
  increaseText: {
    fontSize: 15,
    marginLeft: "4%",
    fontWeight: "bold",
    marginTop: "7%",
  },
  incIcon: {
    fontSize: 30,
    marginLeft: "4%",
    marginTop: "5%",
    color: "red",
  },
  increaseTextTwo: {
    color: "grey",
    marginTop: "2%",
    marginLeft: "5%",
    fontSize: 13,
  },
  cardRewards: {
    backgroundColor: "white",
    height: 160,
    borderRadius: 20,
    width: "94%",
    marginLeft: "3%",
    marginTop: "7%",
  },

  rewardsText: {
    fontSize: 15,
    marginLeft: "4%",
    fontWeight: "bold",
    marginTop: "4%",
  },
  rewardsView: {
    flexDirection: "column",
    marginLeft: "8%",
  },
  rewardsViewText: {
    marginTop: "12%",
    marginLeft: "14%",
    fontWeight: "bold",
    fontSize: 13,
  },
  rewardsViewTextTwo: {
    marginTop: "1%",
    marginLeft: "14%",
    fontWeight: "bold",
  },
  cardChat: {
    backgroundColor: "white",
    marginTop: "7%",
    height: 100,
    borderRadius: 20,
    width: "94%",
    marginLeft: "3%",
  },
  chatText: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: "4%",
    marginTop: "1%",
  },
  chatInnerView: {
    flexDirection: "row",
    marginTop: "10%",
    marginLeft: "4%",
  },
  chatIcon: {
    fontSize: 30,
    color: "red",
  },
  cardInfo: {
    backgroundColor: "white",
    height: 160,
    borderRadius: 20,
    width: "94%",
    marginLeft: "3%",
    marginTop: "7%",
  },
  infoText: {
    fontSize: 15,
    marginLeft: "5%",
    fontWeight: "bold",
    marginTop: "4%",
  },
});

export default Menu;
