import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput as TextInputNormal,
} from "react-native";
import React, { useState } from "react";
import { Button, TextInput, Text, Avatar, Checkbox } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

export default function YourPassword({ onPressAdd }) {
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <Text variant="headlineMedium" style={styles.title}>
          Create a Password
        </Text>
        <TextInputNormal
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={!checked}
        ></TextInputNormal>
        <View style={styles.checkboxContainer}>
          <Checkbox style={styles.checkbox} status={checked ? 'checked' : 'unchecked'}   onPress={() => setChecked(!checked)}/>
          <Text>Show Password</Text>
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
    marginLeft: 20,
    marginTop: 20,
  },
  title: {
    textAlign: "left",
    fontWeight: "bold",
    color: "#14304A",
  },
  input: {
    marginTop: 10,
    fontSize: 22,
  },
  checkboxContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
