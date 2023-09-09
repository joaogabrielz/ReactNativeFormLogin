import React from "react";
import { Button, Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";


const CreateAccountBtn = ({ onPress}) => {

  return (
    <View style={styles.boxCreateAccount}>
      <Text variant="titleSmall" style={styles.subtitleAccount}>
        Do you have an account ?
      </Text>
      <Button
        style={styles.buttonCreateAccount}
        mode="text"
        onPress={onPress}
      >
        Create an Account
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  boxCreateAccount: {
    marginTop: 30,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  subtitleAccount: {
    textAlign: 'center',
    color: "#C4C4C4",
  },
  buttonCreateAccount: {
    padding: 0,
    margin: 0,
  },
});

export default CreateAccountBtn;
