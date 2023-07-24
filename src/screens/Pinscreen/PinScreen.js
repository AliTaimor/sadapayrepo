import React, { useState, useEffect } from "react";

import myLogo from "../../Image/myLogo.png";

import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import CustomKeyboard from "./CustomKeyboard";
function PinScreen({ navigation }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const handleKeyPress = (key) => {
    if (key === "backSpace") {
      if (pin.length > 0) {
        setPin(pin.slice(0, -1));
      }
    } else if (pin.length < 5) {
      setPin(pin + key);
    }
  };

  useEffect(() => {
    const verificationPin = "29870";
    if (pin.length === 5) {
      if (pin === verificationPin) {
        navigation.navigate("Main");
      } else {
        setError(true);
      }
    } else {
      setError(false);
    }
  }, [pin]);

  return (
    <View style={styles.container}>
      <Image source={myLogo} style={styles.logo} />
      <View style={styles.pinContainer}>
        <TextInput style={styles.inputValue} editable={false} value={pin[0]} />
        <TextInput style={styles.inputValue} editable={false} value={pin[1]} />
        <TextInput style={styles.inputValue} editable={false} value={pin[2]} />
        <TextInput style={styles.inputValue} editable={false} value={pin[3]} />
        <TextInput style={styles.inputValue} editable={false} value={pin[4]} />
      </View>
      {error && <Text style={styles.errorText}>Invalid Pin Entered</Text>}
      <View style={styles.forgotPass}>
        <TouchableOpacity>
          <Text style={styles.forgotPassText}>Forgot Pin?</Text>
        </TouchableOpacity>
      </View>
      <CustomKeyboard onKeyPress={handleKeyPress} />
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
  pinContainer: {
    marginTop: 80,
    flexDirection: "row",
    marginBottom: 150,
  },
  inputValue: {
    width: 16,
    height: 50,
    marginHorizontal: 10,
    fontSize: 20,
    textAlign: "center",
    borderBottomWidth: 4,
    borderBottomColor: "gainsboro",
    borderRadius: 2,
    color: "black",
  },

  forgotPass: {
    position: "absolute",
    top: 360,
  },
  forgotPassText: {
    color: "white",
    fontWeight: "bold",
  },
  logo: {
    position: "absolute",
    top: 90,
  },
  errorText: {
    position: "absolute",
    color: "red",
    top: 280,
  },
});

export default PinScreen;
