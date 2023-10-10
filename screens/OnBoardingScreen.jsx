import { View, Text, Image, Alert, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Swiper from "react-native-swiper";
import { Bg1, Bg5, Bg9 } from "../assets";
import { PrimaryBtn } from "../components/UIComponents";
import { appName, primaryColor } from "../utils/utils";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OnBoardingScreen = () => {
  const nav = useNavigation();

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const value = await AsyncStorage.getItem("@onboarding_complete");
      if (value !== null || value === "true") {
        nav.replace("Welcome");
      }
    };
    checkOnboardingStatus();
  }, []);

  async function handleOnBoardingComplete(e) {
    if (e === 2) {
      try {
        await AsyncStorage.setItem("@onboarding_complete", "true");
        nav.navigate("Welcome");
      } catch (error) {
        console.log(
          "Error in saving onboarding status in async storage",
          error
        );
      }
    }
  }
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Swiper onIndexChanged={handleOnBoardingComplete}>
        <ScreenOne />
        <ScreenTwo />
        <ScreenThree />
      </Swiper>
    </View>
  );
};

export function ScreenOne() {
  return (
    <View className="flex-1 items-center justify-center relative">
      <Image source={Bg1} className="w-full h-full" resizeMode="cover" />
      <View
        className="w-auto absolute h-auto justify-end bottom-12"
        style={styles.shadowProp}
      >
        <Text
          className="text-4xl font-extrabold text-left"
          style={{ color: primaryColor }}
        >
          Welcome
        </Text>
        <Text className="text-center text-2xl" style={{ color: "grey" }}>
          to
        </Text>
        <Text
          className="text-6xl font-extrabold text-right "
          style={{ color: primaryColor }}
        >
          {appName}
        </Text>
      </View>
    </View>
  );
}

export function ScreenTwo() {
  return (
    <View className="flex-1 items-center justify-start space-y-4">
      <Image source={Bg5} className="w-full h-[65%]" resizeMode="cover" />
      <View className="w-[90%] h-[25%] flex justify-between justify-items-center">
        <Text className="text-3xl font-extrabold text-center">
          Your Awesome Shop
        </Text>
        <Text className="text-center h-[30%]" style={{ color: "grey" }}>
          Get Anything, Anywhere, Anytime!
        </Text>
        <PrimaryBtn
          onPress={() => Alert.alert("Just an alert... 😂😀")}
          title="Next"
        />
      </View>
    </View>
  );
}

export function ScreenThree() {
  const { navigate } = useNavigation();
  return (
    <View className="flex-1 items-center justify-start space-y-4">
      <Image source={Bg9} className="w-full h-[65%]" resizeMode="cover" />
      <View className="w-[90%] h-[25%] flex justify-between justify-items-center">
        <Text className="text-3xl font-extrabold text-center">
          Happy Shopping
        </Text>
        <Text className="text-center h-[30%]" style={{ color: "grey" }}>
          Get Anything, Anywhere, Anytime!
        </Text>
        <PrimaryBtn onPress={() => navigate("Home")} title="Next" />
      </View>
    </View>
  );
}

export default OnBoardingScreen;

const styles = StyleSheet.create({
  shadowProp: {
    width: "90%",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 30,
  },
});
