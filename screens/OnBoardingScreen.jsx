import { View, Text, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { Bg1 } from "../assets";

const OnBoardingScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Swiper>
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
        className="w-auto absolute h-auto justify-center "
        style={{
          backgroundColor: "rgba(0,0,0,0.3)",
          padding: 20,
          borderRadius: 20,
        }}
      >
        <Text
          className="text-5xl font-extrabold text-center "
          style={{ color: "white" }}
        >
          Welcome to E-Com
        </Text>
      </View>
    </View>
  );
}

export function ScreenTwo() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Screen Two</Text>
    </View>
  );
}

export function ScreenThree() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Screen Three</Text>
    </View>
  );
}

export default OnBoardingScreen;
