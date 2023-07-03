import { StatusBar } from "expo-status-bar";
import React from "react";
import PhoneInput from "react-native-phone-number-input";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

function HomeScreen() {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);

  const handleContinue = () => {
    if (phoneNumber.length === 10) {
      navigation.navigate("OtpScreen", { phoneNumber: phoneNumber });
    } else {
      setError(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's get started!</Text>
      <Text style={styles.titletwo}>Please enter your mobile number</Text>
      <View style={styles.inputContainer}>
        <PhoneInput value={phoneNumber} onChangeText={setPhoneNumber} />
      </View>
      {error && <Text style={styles.errorText}>Invalid phone number</Text>}

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Icon
          name="arrow-right"
          size={20}
          color="white"
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#94bbe9",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  titletwo: {
    fontSize: 18,
    marginBottom: 50,
    color: "white",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "transparent",
    // borderColor: "black",
    // borderWidth: 1,
    // borderRadius: 8,
    padding: 10,
    marginTop: 20,
    flexDirection: "row-reverse",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 5,
    padding: 10,
    color: "black",
    alignSelf: "center",
  },
  txtinput: {
    height: 40,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 5,
    color: "black",
    marginRight: 10,
  },
  buttonIcon: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 2,
  },

  errorText: {
    color: "red",
  },
});

export default HomeScreen;
