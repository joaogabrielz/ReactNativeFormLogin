import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, TextInput, Text, Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import CreateAccountBtn from "../components/CreateAccountBtn";
import SocialMediaBtns from "../components/SocialMediaBtns";
import FormLogin from "../components/FormLogin";
import GroupLineForgotPass from "../components/GroupLineForgotPass";

export default function Login({ onPressAdd }) {
  const navigation = useNavigation();

  const handlePress = (email, password) => {
    // onPressAdd(email);
    console.log("\n");
    console.log(email);
    console.log(password);
  };

  const navigateTo = () => {
    navigation.navigate('CreateAccount');
  };

  const clickedIn = (value) => {
    console.log(`clicked in ${value}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.main}>
      <FormLogin onPress={handlePress} />

      <View style={styles.boxForgotPassword}>
        <GroupLineForgotPass />
      </View>

      <View style={styles.socialButtons}>
        <SocialMediaBtns onPress={clickedIn} />
      </View>

      <View style={styles.createAccount}>
        <CreateAccountBtn onPress={navigateTo} />
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
    marginTop: 50,
  },
  createAccount: {
    marginTop: 20,
  },
});
