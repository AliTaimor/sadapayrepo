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
import Icon from "react-native-vector-icons/FontAwesome";
import Discover from "./Discover";

function MainScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardOne}>
          <TouchableOpacity activeOpacity={0.9}>
            <Card containerStyle={styles.cardOneContainer}>
              <Card.Title style={styles.cardOneTitle}>
                Current balance
              </Card.Title>
              <Text style={styles.cardOneText}>Rs.1000</Text>
              <View style={styles.arrowContainer}>
                <Icon name="arrow-right" style={styles.arrowRightIcon} />
              </View>
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cardParent}>
          <View style={styles.twoCard}>
            <TouchableOpacity activeOpacity={0.9}>
              <Card containerStyle={styles.cardTwoContainer}>
                <Card.Title>
                  <Icon name="arrow-down" style={styles.arrowIcon} />
                </Card.Title>
                <Text style={styles.cardTwoText}>Load Money</Text>
              </Card>
            </TouchableOpacity>
          </View>
          <View style={styles.threeCard}>
            <TouchableOpacity activeOpacity={0.9}>
              <Card containerStyle={styles.cardThreeContainer}>
                <Card.Title>
                  <Icon name="arrow-up" style={styles.threeArrowIcon} />
                  <Icon name="arrow-down" style={styles.threeArrowIcon} />{" "}
                </Card.Title>

                <Text style={styles.cardThreeText}>Send & Request</Text>
              </Card>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Card containerStyle={styles.transactionContainer}>
            <View style={styles.innerTransacView}>
              <Card.Title>
                <Icon name="exclamation-circle" style={styles.exclamIcon} />
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
    </View>
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
    marginBottom: 0,
    borderRadius: 20,
    height: 317,
    padding: 40,
    position: "relative",
  },
  cardTwoContainer: {
    backgroundColor: "orange",
    marginBottom: 0,
    borderRadius: 20,
    height: 150,
  },
  cardThreeContainer: {
    backgroundColor: "skyblue",
    marginBottom: 0,
    borderRadius: 20,
    height: 150,
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
    marginTop: 60,
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },

  cardThreeText: {
    marginTop: 40,
    fontSize: 19,
    fontWeight: "bold",
    color: "white",
  },

  cardParent: {
    flexDirection: "column",
    marginLeft: 200,
    marginTop: 63,
  },

  cardOne: {
    position: "absolute",
    top: 60,
    bottom: 0,
    left: 0,
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
    marginBottom: 500,
    borderRadius: 10,
    height: 90,
    padding: 10,
    width: 350,
    marginRight: 25,
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
    top: 500,
    
  },
});
