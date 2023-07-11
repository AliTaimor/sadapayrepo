import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRef, useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

function OtpScreen({ navigation, route }) {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);
  const [countdown, setCountDown] = useState(10);
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [error, setError] = useState(false);

  const { phoneNumber } = route.params;
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountDown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown]);

  const confirmingOtp = () => {
    const hardcodedOtp = "29870";
    const otp = otp1 + otp2 + otp3 + otp4 + otp5;

    if (otp !== hardcodedOtp) {
      setError(true);
    } else {
      navigation.navigate("Pin");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter verification code</Text>
      <Text style={styles.titletwo}>We have sent it to {phoneNumber}</Text>
      <View style={styles.otpContainer}>
        <TextInput
          ref={input1Ref}
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => {
            setOtp1(text);
            if (text.length === 1) {
              input2Ref.current.focus();
            }
          }}
        />

        <TextInput
          ref={input2Ref}
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => {
            setOtp2(text);
            if (text.length === 0) {
              input1Ref.current.focus();
            } else if (text.length === 1) {
              input3Ref.current.focus();
            }
          }}
        />

        <TextInput
          ref={input3Ref}
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => {
            setOtp3(text);
            if (text.length === 0) {
              input2Ref.current.focus();
            } else if (text.length === 1) {
              input4Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={input4Ref}
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => {
            setOtp4(text);
            if (text.length === 0) {
              input3Ref.current.focus();
            } else if (text.length === 1) {
              input5Ref.current.focus();
            }
          }}
        />

        <TextInput
          ref={input5Ref}
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => {
            setOtp5(text);
            if (text.length === 0) {
              input4Ref.current.focus();
            }
          }}
        />
      </View>
      {error && <Text style={styles.errorText}>Invalid Otp Entered</Text>}

      <View style={styles.timerContainer}>
        <Text style={styles.titleThree}> Resend Code in... </Text>
        {countdown > 0 ? (
          <Text>{countdown}</Text>
        ) : (
          <TouchableOpacity style={styles.buttonCall}>
            <Text style={styles.buttonText}>Resend Code</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.confirmButton}>
        <TouchableOpacity onPress={confirmingOtp}>
          <Text style={styles.confirmText}>
            Next
            <Ionicons name="ios-arrow-forward" style={styles.nextIcon} />
          </Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  titletwo: {
    fontsize: 20,
    color: "white",
  },
  otpContainer: {
    flexDirection: "row",
    marginTop: 100,
  },
  otpInput: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
  },
  timerContainer: {
    marginTop: 30,
    marginRight: 190,
  },
  titleThree: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  buttonCall: {
    backgroundColor: "transparent",
    borderRadius: 20,
    marginLeft: 2,
  },
  buttonText: {
    color: "grey",
    fontWeight: "bold",
  },
  buttonView: {
    flexDirection: "row",
  },
  confirmButton: {
    position: "absolute",
    flexDirection: "row",
    bottom: 40,
    right: 50,
    paddingVertical: 1,
  },
  confirmText: {
    color: "white",
    fontSize: 16,
  },
  nextIcon: {
    fontSize: 17,
    color: "white",
    marginTop: 2,
  },
  errorText: {
    position: "absolute",
    color: "red",
  },
});
export default OtpScreen;
