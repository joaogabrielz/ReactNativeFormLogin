import React from "react";
import { Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";

const GroupLineForgotPass = ({ showForgotPasswordText = true }) => {
  return (
    <View style={styles.boxForgotPassword}>
      {showForgotPasswordText && (
        <Text variant="titleMedium" style={styles.lineTitle}>
          Forgotten your password ?
        </Text>
      )}
      <View style={styles.groupLine}>
        <View style={styles.line}></View>
        <Text variant="titleSmall" style={styles.lineText}>
          Or sign in with
        </Text>
        <View style={styles.line}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxForgotPassword: {
    marginTop: 20,
  },
  groupLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  lineTitle: {
    color: "#14304A",
    textAlign: "center",
  },
  lineText: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "#C4C4C4",
  },
  line: {
    alignSelf: "",
    minWidth: 100,
    height: 1,
    backgroundColor: "black",
  },
});

export default GroupLineForgotPass;
