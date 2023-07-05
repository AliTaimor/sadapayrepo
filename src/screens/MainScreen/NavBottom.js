import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
function NavBottom() {
  const [activeTab, setActiveTab] = useState("");
  const tab = [
    { name: "Personal", icon: "ios-home" },
    { name: "Payments", icon: "ios-cash" },
    { name: "More", icon: "ios-menu" },
  ];
  return (
    <View style={styles.container}>

      {tab.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tab}
          onPress={() => setActiveTab(index)}
        >
          <Icon
            name={tab.icon}
            size={24}
            color={activeTab === index ? "#007AFF" : "#999999"}
          />
          <Text style={styles.tabText}>{tab.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default NavBottom;

const styles = StyleSheet.create({
container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 135,
    justifyContent: "space-between",
  },
  tab: {
    alignItems: "center",
    paddingHorizontal: 25,
    paddingRight:40,
  },

  tabText: {
    marginTop: 5,
    fontSize: 12,
    color: "#999999",
  },
  activeText: {
    color: "#007AFF",
  },
});
