import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { primaryColor } from "../utils/utils";
import { Bg5 } from "../assets";
import { PrimaryBtn } from "../components/UIComponents";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const nav = useNavigation();
  return (
    <ImageBackground
      source={Bg5}
      resizeMode="cover"
      className="h-full w-full flex justify-end items-center"
    >
      <Text
        className="text-5xl font-extrabold mb-2"
        style={{ color: primaryColor, fontWeight: 900 }}
      >
        SignUp Now
      </Text>
      <View className="w-[90%] flex-row flex-wrap justify-between items-center mb-2">
        <TextInput
          placeholder="First Name"
          className="bg-white w-[48%] px-4 py-4 rounded-full mb-2"
        />
        <TextInput
          placeholder="Last Name"
          className="bg-white w-[48%] px-4 py-4 rounded-full mb-2"
        />
      </View>
      <TextInput
        placeholder="Email"
        className="bg-white w-[90%] px-4 py-4 rounded-full mb-2"
      />
      <TextInput
        placeholder="Password"
        className="bg-white w-[90%] px-4 py-4 rounded-full"
      />
      <PrimaryBtn title="Sign Up Now" />
      <TouchableOpacity
        className="mb-10 mt-2 bg-white rounded-full p-4 w-[90%]"
        onPress={() => nav.navigate("Login")}
      >
        <Text
          className="text-center text-lg"
          style={{ color: primaryColor, fontWeight: 500 }}
        >
          Login Now
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default SignUp;
