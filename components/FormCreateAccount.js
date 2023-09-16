import { Button, Text, TextInput } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import React, { useState } from "react";

const FormCreateAccount = ({ onPress }) => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleDateOfBirthChange = (text) => {
    const cleanedText = text.replace(/[^0-9]/g, "");

    if (cleanedText.length <= 2) {
      setBirthday(cleanedText);
    } else if (cleanedText.length <= 4) {
      setBirthday(cleanedText.slice(0, 2) + "/" + cleanedText.slice(2));
    } else {
      setBirthday(
        cleanedText.slice(0, 2) +
          "/" +
          cleanedText.slice(2, 4) +
          "/" +
          cleanedText.slice(4, 8)
      );
    }
  };

  const handlePhoneChange = (text) => {
    const cleanedText = text.replace(/[^0-9]/g, "");

    if (cleanedText.length <= 2) {
      setPhone(cleanedText);
    } else if (cleanedText.length <= 7) {
      setPhone(
        `(${cleanedText.slice(0, 2)}) ${cleanedText.slice(2)}`
      );
    } else {
      setPhone(
        `(${cleanedText.slice(0, 2)}) ${cleanedText.slice(2, 7)}-${cleanedText.slice(7, 11)}`
      );
    }
  };

  return (
    <View>
      <Text variant="headlineMedium" style={styles.title}>
        Create Account
      </Text>
      <Text variant="labelLarge" style={styles.subtitle}>
        Fill your information below or register with your social account
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Name"
          placeholder="Your Name"
          right={<TextInput.Affix text="" />}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          mode="outlined"
          label="Birthday"
          placeholder="MM/DD/YYYY"
          keyboardType="numeric"
          right={<TextInput.Affix icon="calendar-blank" />}
          onChangeText={handleDateOfBirthChange}
          value={birthday}
          maxLength={10}
        />
        <TextInput
          mode="outlined"
          label="Address"
          placeholder="Enter Your Location"
          right={<TextInput.Affix text="" />}
          onChangeText={(text) => setAddress(text)}
          value={address}
        />
        <TextInput
          mode="outlined"
          label="Phone No."
          placeholder="(XX) XXXXX-XXXX"
          keyboardType="numeric"
          right={<TextInput.Affix text="" />}
          onChangeText={handlePhoneChange}
          value={phone}
          maxLength={15}
        />

        <Button
          style={styles.button}
          mode="contained"
          onPress={() => onPress(name, birthday, address, phone)}
        >
          Next
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#14304A",
  },
  subtitle: {
    textAlign: "center",
    color: "#C4C4C4",
    paddingHorizontal: 80,
    marginHorizontal: "auto",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginTop: 50,
    marginHorizontal: 30,
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 100,
  },
});

export default FormCreateAccount;
