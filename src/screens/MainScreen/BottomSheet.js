import React from "react";
import { View, Modal, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function BottomSheet({ isVisible, onClose }) {
  const navigation = useNavigation();

  const handleChildOnePress = () => {
    navigation.navigate("One");
  };

  const handleChildTwoPress = () => {
    navigation.navigate("Two");
  };

  const handleChildThreePress = () => {
    navigation.navigate("Three");
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.container}
        onPress={onClose}
        activeOpacity={1}
      >
        <View style={styles.bottomSheet}>
          <Text style={styles.title}>Payments</Text>
          <View style={styles.parentView}>
            <TouchableOpacity onPress={handleChildOnePress}>
              <View style={styles.childOne}>
                <View style={styles.childOneContent}>
                  <Ionicons name="ios-phone-portrait" style={styles.iconOne} />
                  <Text style={styles.childOneText}>Mobile top up</Text>
                </View>

                <Text style={styles.childOneTextTwo}>
                  instantly top up your mobile
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleChildTwoPress}>
              <View style={styles.childTwo}>
                <View style={styles.childTwoContent}>
                  <Ionicons name="newspaper-outline" style={styles.iconOne} />

                  <Text style={styles.childTwoText}>Bills and utilities</Text>
                </View>
                <Text style={styles.childTwoTextTwo}>
                  Pay for your utilities
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleChildThreePress}>
              <View style={styles.childThree}>
                <View style={styles.childThreeContent}>
                  <Ionicons name="cash-outline" style={styles.iconOne} />

                  <Text style={styles.childThreeText}>Money requests</Text>
                </View>
                <Text style={styles.childThreeTextTwo}>
                  Review pending money requests
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  bottomSheet: {
    backgroundColor: "white",
    height: "46%",
    borderRadius: 28,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginLeft: 24,
    marginTop: 20,
  },
  parentView: {
    flexWrap: "wrap",
    marginLeft: 20,
  },
  childOne: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginTop: 0,
    paddingRight: "30%",
    paddingTop: "9%",
  },
  childTwo: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingTop: "10%",
  },
  childThree: {
    paddingTop: "10%",
  },
  childOneText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 40,
  },
  childOneTextTwo: {
    fontSize: 13,
    color: "grey",
    marginLeft: 70,
    marginBottom: 10,
  },
  iconOne: {
    fontSize: 30,
  },

  childTwoText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 40,
  },
  childTwoTextTwo: {
    fontSize: 14,
    color: "grey",
    marginLeft: 70,
    marginBottom: 10,
  },
  childThreeText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 40,
  },
  childThreeTextTwo: {
    fontSize: 14,
    color: "grey",
    marginLeft: 70,
    marginBottom: 10,
  },
  childOneContent: {
    flexDirection: "row",
    marginBottom: 0,
  },
  childTwoContent: {
    flexDirection: "row",
    marginBottom: 0,
  },
  childThreeContent: {
    flexDirection: "row",
    marginBottom: 0,
  },
});

export default BottomSheet;
