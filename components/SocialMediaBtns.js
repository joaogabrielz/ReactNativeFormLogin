import React from "react";
import { Avatar } from "react-native-paper";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const SocialMediaBtns = ({ onPress }) => {
  return (
    <View style={styles.boxLogos}>
      <TouchableOpacity
        onPress={() => onPress('apple')}
        style={styles.containerLogo}
      >
        <Avatar.Image
          size={60}
          source={require("../assets/apple-logo.png")}
          style={styles.buttonLogo}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPress('google')}
        style={styles.containerLogo}
      >
        <Avatar.Image
          size={60}
          source={require("../assets/gogole-logo.png")}
          style={styles.buttonLogo}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPress('face')}
        style={styles.containerLogo}
      >
        <Avatar.Image
          size={60}
          source={require("../assets/face-logo.png")}
          style={styles.buttonLogo}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  boxLogos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  containerLogo: {},
  buttonLogo: {
    padding: 40,
    borderRadius: 100,
    borderColor: "#C4C4C4",
    borderWidth: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SocialMediaBtns;
