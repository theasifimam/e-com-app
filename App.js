import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  Login,
  OnBoardingScreen,
  ProductScreen,
  SignUp,
  WelcomeScreen,
  Profile,
  CartScreen,
  CategoryScreen,
} from "./screens";
import { Provider } from "react-redux";
import store from "./context/store";
import BottomTab from "./components/BottomTab";

const Stack = createNativeStackNavigator();

const GetActiveScreen = ({ setActiveScreen }) => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      const currentScreen = navigation.getCurrentRoute().name;
      setActiveScreen(currentScreen);
    });
    return unsubscribe;
  }, [navigation]);
};

const App = () => {
  const [activeScreen, setActiveScreen] = useState("");
  const hideTab = ["OnBoarding", "Welcome", "Login", "SignUp", "Product"];
  return (
    <NavigationContainer>
      <GetActiveScreen setActiveScreen={setActiveScreen} />
      <Provider store={store}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Product" component={ProductScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
        </Stack.Navigator>
      </Provider>
      {!hideTab?.includes(activeScreen) && (
        <BottomTab activeScreen={activeScreen} />
      )}
    </NavigationContainer>
  );
};

export default App;
