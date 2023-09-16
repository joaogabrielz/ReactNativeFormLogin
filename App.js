import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./views/Login";
import CreateAccount from "./views/CreateAccount";
import FormSignUp from "./views/FormSignUp/index";

const Stack = createNativeStackNavigator();

const pressAdd = (city) => {
  console.log(`City added: ${city}`);
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ title: "", headerShown: false }}>
          {(props) => <Login {...props} onPressAdd={pressAdd} />}
        </Stack.Screen>
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="FormSignUp"
          component={FormSignUp}
          options={{
            title: "",
            headerBackVisible: false,
            headerTitleAlign: "center",
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
