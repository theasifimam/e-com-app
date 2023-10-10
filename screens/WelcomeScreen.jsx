import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Bg5 } from "../assets";
import { PrimaryBtn } from "../components/UIComponents";
import { useNavigation } from "@react-navigation/native";
import { primaryColor } from "../utils/utils";

const WelcomeScreen = () => {
  const nav = useNavigation();
  return (
    <ImageBackground
      source={Bg5}
      resizeMode="cover"
      className="h-full w-full flex justify-end items-center"
    >
      <PrimaryBtn title="Login" onPress={() => nav.navigate("Login")} />
      <TouchableOpacity
        className="mb-10 mt-2 bg-white rounded-full p-4 w-[90%]"
        onPress={() => nav.navigate("SignUp")}
      >
        <Text
          className="text-center text-lg"
          style={{ color: primaryColor, fontWeight: 500 }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default WelcomeScreen;
