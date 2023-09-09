import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput as TextInputNormal,
} from "react-native";
import React, { useState } from "react";
import {
  Button,
  TextInput,
  Text,
  Avatar,
  ProgressBar,
  MD3Colors,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import YourEmail from "./YourEmail";
import YourPassword from "./YourPassword";
import VerifyOTP from "./VerifyOTP";

export default function FormSignUp({ onPressAdd }) {
  const navigation = useNavigation();

  const STEPS = [
    {
      step: 1,
      textButton: "Next",
      component: <YourEmail />,
    },
    {
      step: 2,
      textButton: "Sign Up",
      component: <YourPassword />,
    },
    {
      step: 3,
      textButton: "Verify ",
      component: <VerifyOTP />,
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  // const handlePress = (email) => {
  //   // onPressAdd(email);
  //   console.log("\n");
  //   console.log(email);

  //   navigation.navigate("");
  // };

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const backStep = () => {
    if(currentStep == 0){
      navigation.navigate("CreateAccount");
    }
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep / (STEPS.length - 1)) * 100) / 100;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <View style={styles.header}>
          <Button
            icon={({ size, color }) => (
              <Icon name="chevron-left" size={40} color={"#14304A"}/>
            )}
            style={styles.buttonBack}
            onPress={backStep}
          ></Button>
          <Text variant="titleMedium" style={styles.headerText}>
            Sign up
          </Text>
          <Button></Button>
        </View>
        {STEPS[currentStep].component}
        <View style={styles.inputContainer}>
          <Text style={styles.steps}>
            {" "}
            {STEPS[currentStep].step} of {STEPS.length}
          </Text>
          <ProgressBar
            progress={progress}
            color={MD3Colors.primary50}
            style={styles.progress}
          />
          <Button
            style={styles.button}
            mode="contained"
            onPress={nextStep}
            // disabled={currentStep === STEPS.length - 1}
          >
            {STEPS[currentStep].textButton}
          </Button>
          {currentStep === 1 && (
          <Text style={styles.terms}>By signing up, you agree to our <Text style={{ fontWeight: "bold" }}>Terms of Service</Text> and <Text style={{ fontWeight: "bold" }}>Privacy Policy</Text></Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 100,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 80,
  },
  title: {
    textAlign: "left",
    marginLeft: 20,
    fontWeight: "bold",
    color: "#14304A",
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
  steps: {
    textAlign: "right",
  },
  progress: {
    height: 8,
    borderRadius: 100,
  },
  terms: {
    textAlign: 'center'
  }
});
