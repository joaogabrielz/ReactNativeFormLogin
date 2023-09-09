import { Button, Text, TextInput } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import React, { useState } from "react";

const FormLogin = ({ onPress }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <Text variant="titleLarge" style={styles.title}>
        Log in
      </Text>
      <Text variant="titleLarge" style={styles.subtitle}>
        Hi! Welcome
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Email Address"
          placeholder="Enter Your Email"
          right={<TextInput.Affix text="" />}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          mode="outlined"
          label="Password"
          placeholder="Enter Your Password"
          secureTextEntry={!showPassword}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              name={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Button style={styles.button} mode="contained" onPress={() => onPress(email, password)}>
          Log in
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

export default FormLogin;
