import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import {
  useNavigation,
  useIsFocused,
  useRoute,
} from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import BottomSheet from "./BottomSheet";

function NavBottom() {
  const [activeTab, setActiveTab] = useState("");
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const tab = [
    { name: "Personal", Ionicons: "ios-home" },
    { name: "Payments", Ionicons: "ios-cash" },
    { name: "More", Ionicons: "ios-menu" },
  ];
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const route = useRoute();

  useEffect(() => {
    if (isFocused) {
      // Set the active tab based on the current route
      const currentRouteName = route.name;

      if (currentRouteName === "Main") {
        setActiveTab(0);
      } else if (currentRouteName === "More") {
        setActiveTab(2);
      } else {
        setActiveTab("");
      }
    }
  }, [isFocused, route]);

  const handleNavigation = (index) => {
    setActiveTab(index);

    if (index === 0) {
      navigation.navigate("Main");
    } else if (index === 2) {
      navigation.navigate("More");
    } else if (index === 1) {
      setBottomSheetVisible(!bottomSheetVisible); // Open the bottom sheet
    }
  };

  return (
    <View style={styles.navContainer}>
      {tab.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tab}
          onPress={() => handleNavigation(index)}
        >
          <Ionicons
            name={tab.Ionicons}
            size={24}
            color={activeTab === index ? "#007AFF" : "#999999"}
          />
          <Text
            style={[styles.tabText, activeTab === index && styles.activeText]}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
      {bottomSheetVisible && (
        <BottomSheet onClose={() => setBottomSheetVisible(false)} />
      )}
    </View>
  );
}

export default NavBottom;

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 40,
    justifyContent: "space-between",
  },

  tab: {
    alignItems: "center",
    paddingHorizontal: 25,
    paddingRight: 40,
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
