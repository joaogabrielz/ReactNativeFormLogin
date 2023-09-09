import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput as TextInputNormal,
} from "react-native";
import React, { useState } from "react";
import { Button, TextInput, Text, Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

export default function YourEmail({ onPressAdd }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <Text variant="headlineMedium" style={styles.title}>
          What's your email?
        </Text>
        <TextInputNormal
          style={styles.input}
          placeholder="Email Address"
          onChangeText={(text) => setEmail(text)}
          value={email}
        ></TextInputNormal>
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
    marginTop: 10,
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
});
