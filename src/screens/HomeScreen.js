import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function HomeScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [conCode, setConCode] = useState("+92");
  const handleContinue = () => {
    phoneNumber.length === 10 && conCode.length === 3
      ? alert("Loading... Confirming Phone Number...")
      : alert("Invalid Phone Number or Country Code");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's get started!</Text>
      <Text style={styles.titletwo}>Please enter your mobile number</Text>
      <View style={styles.inputContainer}>
        <View style={styles.countryCodeContainer}>
          <TextInput
            style={styles.txtinput}
            placeholder="+92"
            placeholderTextColor="gray"
            keyboardType="phone-pad"
            value={conCode}
            onChangeText={setConCode}
            maxLength={3}
          />
        </View>
        <View style={styles.phoneNumberContainer}>
          <TextInput
            style={styles.input}
            placeholder="3001234567"
            placeholderTextColor="gray"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Icon
          name="arrow-right"
          size={20}
          color="grey"
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
    color: "grey",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
    flexDirection: "row-reverse",
    marginLeft: 70,
  },
  inputContainer: {
    flexDirection: "row",
    width: "50%",
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
  countryCodeContainer: {
    width: 50,
    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  phoneNumberContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
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
});

export default HomeScreen;
