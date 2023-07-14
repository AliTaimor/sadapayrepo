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
            <TouchableOpacity activeOpacity={0.9} onPress={handlePress}>
              <Card containerStyle={styles.cardOneContainer}>
                <Card.Title style={styles.cardOneTitle}>
                  Current balance
                </Card.Title>
                <Text style={styles.cardOneText}>Rs.1000</Text>
                <View style={styles.arrowContainer}>
                  <Ionicons
                    name="ios-arrow-forward"
                    style={styles.arrowRightIcon}
                  />
                </View>
              </Card>
            </TouchableOpacity>
          </View>
          <View style={styles.otherCardWrapper}>
            <View style={styles.twoCard}>
              <TouchableOpacity activeOpacity={0.9}>
                <Card containerStyle={styles.cardTwoContainer}>
                  <Card.Title>
                    <Ionicons name="ios-arrow-down" style={styles.arrowIcon} />
                  </Card.Title>
                  <Text style={styles.cardTwoText}>Load Money</Text>
                </Card>
              </TouchableOpacity>
            </View>

            <View style={styles.threeCard}>
              <TouchableOpacity activeOpacity={0.9}>
                <Card containerStyle={styles.cardThreeContainer}>
                  <Card.Title>
                    <Ionicons
                      name="ios-arrow-up"
                      style={styles.threeArrowIcon}
                    />
                    <Ionicons
                      name="ios-arrow-down"
                      style={styles.threeArrowIcon}
                    />
                  </Card.Title>

                  <Text style={styles.cardThreeText}>Send & Request</Text>
                </Card>
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
    flex: 1,
    backgroundColor: "beige",
    alignItems: "center",
    justifyContent: "center",
  },

  bottomView: {
    position: "absolute",
    bottom: 0,
  },
  cardOneContainer: {
    backgroundColor: "lightgreen",
    borderRadius: 25,
    height: 300,
    width: "102%",
    marginLeft: 20,
  },
  cardTwoContainer: {
    backgroundColor: "orange",
    borderRadius: 25,
    height: 140,
    width: "83%",
    marginTop: 30,
  },
  cardThreeContainer: {
    backgroundColor: "skyblue",
    borderRadius: 25,
    width: "83%",
    height: 140,
    marginBttom: 30,
  },
  cardImage: {
    height: 150,
    borderRadius: 30,
  },
  cardOneText: {
    marginBottom: 10,
    fontWeight: "bold",
    color: "white",
    fontSize: 22,
  },
  cardTwoText: {
    marginTop: 50,
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },

  cardThreeText: {
    marginTop: "12%",
    fontSize: 19,
    fontWeight: "bold",
    color: "white",
  },

  cardParent: {
    flexDirection: "column",
    marginLeft: 200,
    marginTop: 60,
  },

  cardOne: {
    marginTop: 10,
  },
  arrowIcon: {
    fontSize: 20,
    color: "white",
  },
  threeArrowIcon: {
    color: "white",
    fontSize: 20,
  },
  arrowRightIcon: {
    color: "white",
    fontSize: 30,
  },
  arrowContainer: {
    position: "absolute",
    top: 200,
    right: 0,
  },
  cardOneTitle: {
    color: "white",
  },
  transactionContainer: {
    backgroundColor: "lightgray",
    marginBottom: "100%",
    marginTop: "7%",
    borderRadius: 20,
    height: 90,
    padding: 14,
    width: "88%",
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
  },
  otherCardWrapper: {
    marginHorizontal: 20,
  },
  twoCard: {},
});
