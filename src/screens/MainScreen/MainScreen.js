import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import NavBottom from "./NavBottom";
import { Card } from "react-native-elements";
import Discover from "./Discover";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function MainScreen() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Current");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardWrapper}>
          <View style={styles.cardOne}>
            <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
              <View style={styles.cardOneContainer}>
                <Text style={styles.cardOneTitle}> Current balance</Text>
                <Text style={styles.cardOneText}>Rs.1000</Text>
                <View style={styles.arrowContainer}>
                  <Ionicons
                    name="ios-arrow-forward"
                    style={styles.arrowRightIcon}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.cardParent}>
            <View style={styles.twoCard}>
              <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.cardTwoContainer}>
                  <Ionicons name="ios-arrow-down" style={styles.arrowIcon} />
                  <Text style={styles.cardTwoText}>Load Money</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.threeCard}>
              <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.cardThreeContainer}>
                  <View style={styles.arrowThreeContainer}>
                    <Ionicons
                      name="ios-arrow-up"
                      style={styles.threeArrowIcon}
                    />
                    <Ionicons
                      name="ios-arrow-down"
                      style={styles.threeArrowIcon}
                    />
                  </View>

                  <Text style={styles.cardThreeText}>Send & Request</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <Card containerStyle={styles.transactionContainer}>
            <View style={styles.innerTransacView}>
              <Card.Title>
                <Ionicons name="ios-warning" style={styles.exclamIcon} />
              </Card.Title>

              <Text style={styles.transactionText}>
                Heads up IBFT and card transactions may be temporarily
                unavailable on Wed between 02:30-03:00AM PKT
              </Text>
            </View>
          </Card>
        </View>
        <View style={styles.discoverView}>
          <Discover />
        </View>
      </ScrollView>

      <View style={styles.bottomView}>
        <NavBottom />
      </View>
    </SafeAreaView>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    alignItems: "center",
  },

  bottomView: {
    position: "absolute",
    bottom: 0,
  },

  cardOneContainer: {
    backgroundColor: "lightgreen",
    borderRadius: 20,
    height: 300,
    width: "138%",
  },
  cardOneTitle: {
    color: "white",
    fontSize: 18,
    marginTop: "8%",
    marginLeft: 4,
  },
  cardOneTitle: {
    color: "white",
    fontSize: 18,
    marginTop: "10%",
    marginLeft: 9,
  },
  cardOneText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 22,
    marginLeft: 13,
  },
  arrowRightIcon: {
    color: "white",
    fontSize: 25,
  },
  arrowContainer: {
    position: "absolute",
    top: 200,
    right: 15,
  },

  cardTwoContainer: {
    backgroundColor: "orange",
    borderRadius: 25,
    height: 146,
    width: "90%",
    marginTop: "14%",
  },
  arrowIcon: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginTop: "15%",
  },
  cardTwoText: {
    marginTop: "40%",
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },

  cardThreeContainer: {
    backgroundColor: "skyblue",
    borderRadius: 25,
    height: 146,
    width: "90%",
    marginTop: "6%",
  },
  threeArrowIcon: {
    color: "white",
    fontSize: 20,
  },
  arrowThreeContainer: {
    flexDirection: "row",
    marginTop: "18%",
    marginLeft: "36%",
  },

  cardThreeText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginTop: "20%",
    textAlign: "center",
  },

  cardParent: {
    flexDirection: "column",
    marginLeft: "15%",
    marginTop: "1%",
  },

  cardOne: {
    marginTop: "7%",
    paddingLeft: "5%",
    paddingRight: "2%",
  },

  transactionContainer: {
    backgroundColor: "lightgray",
    marginBottom: "100%",
    marginTop: "7%",
    borderRadius: 20,
    height: 90,
    width: "93%",
    elevation: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  exclamIcon: {
    fontSize: 35,
    justifyContent: "center",
  },
  innerTransacView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  discoverView: {
    position: "absolute",
    top: 480,
  },
  cardWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  twoCard: {},
});
