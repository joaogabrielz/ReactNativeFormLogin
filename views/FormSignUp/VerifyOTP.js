import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput as TextInputNormal,
} from "react-native";
import React, { useState, useRef } from "react";
import { Button, TextInput, Text, Avatar, Checkbox } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

export default function VerifyOTP({ onPressAdd }) {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const otpInputs = Array.from({ length: 4 }, () => useRef())

  const handleOTPChange = (text, index) => {
    if (text.length === 1 && index < 3) {
      otpInputs[index + 1].current.focus();
    }
    
    const newOTP = [...otp];
    newOTP[index] = text;
    setOTP(newOTP);
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === "Backspace" && index > 0) {
      otpInputs[index - 1].current.focus();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <Text variant="headlineMedium" style={styles.title}>
          Verify OTP
        </Text>
        <Text variant="labelLarge" style={styles.subtitle}>
          Please enter the code we sent you to email
        </Text>
        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              style={styles.input}
              placeholder=""
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(text) => handleOTPChange(text, index)}
              value={value}
              onKeyPress={(event) => handleKeyPress(event, index)}
              ref={otpInputs[index]}
            />
          ))}
        </View>
        <View style={styles.resendOTP}>
          <Text style={styles.resendText}>Didn´t Receive OTP?</Text>
          <Button style={styles.resend}>Resend Code</Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  main: {
    marginLeft: 0,
    marginTop: 20,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#14304A",
  },
  subtitle: {
    textAlign: "center",
    color: "#C4C4C4",
  },
  input: {
    marginTop: 10,
    fontSize: 22,
    borderRadius: 10,
    backgroundColor: "transparent",
  },
  checkboxContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  otpContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  resendOTP: {
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
  },
  resendText: {
    color: '#C4C4C4',
  },
  resend: {
    fontWeight: 'bold',
  }
});
