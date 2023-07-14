import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Discover() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Discover
          <Ionicons name="play-circle" style={styles.playIcon} />
        </Text>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <Text style={styles.cardText}>Welcome to MyPay!</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardText}>Load Money to your account</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardText}>Order your physical card</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardText}>Use your virtual card</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardText}>Secure your account</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
  },
  header: {
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
  },
  scrollContainer: {
    marginTop: 10,
    height: 200,
  },
  card: {
    width: 140,
    height: 160,
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 15,
    justifyContent: "space-around",
    color: "black",
    marginTop: 70,
    marginRight: 18,
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
  },
  playIcon: {
    fontSize: 18,
  },
  timesIcon: {
    fontSize: 18,
    color: "grey",
  },
});

export default Discover;
