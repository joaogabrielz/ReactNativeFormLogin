import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, TextInput, Text, Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import CreateAccountBtn from "../components/CreateAccountBtn";
import SocialMediaBtns from "../components/SocialMediaBtns";
import FormCreateAccount from "../components/FormCreateAccount";
import GroupLineForgotPass from "../components/GroupLineForgotPass";

export default function CreateAccount({ onPressAdd }) {
  const navigation = useNavigation();

  const handlePress = (name, birthday, address, phone) => {
    // onPressAdd(email);
    console.log("\n");
    console.log(name);
    console.log(birthday);
    console.log(address);
    console.log(phone);

    navigation.navigate("FormSignUp");
  };

  const clickedIn = (value) => {
    console.log(`clicked in ${value}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.main}>
      <FormCreateAccount onPress={handlePress} />

      <View style={styles.boxForgotPassword}>
        <GroupLineForgotPass showForgotPasswordText={false}/>
      </View>

      <View style={styles.socialButtons}>
        <SocialMediaBtns onPress={clickedIn} />
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
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 100,
  },

  boxForgotPassword: {
    marginTop: 20,
  },

  socialButtons: {
    marginTop: 20,
  },
});
