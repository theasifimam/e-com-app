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

const Login = () => {
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
        Login Now
      </Text>
      <TextInput
        placeholder="Username"
        className="bg-white w-[90%] px-4 py-4 rounded-full mb-2"
      />
      <TextInput
        placeholder="Password"
        className="bg-white w-[90%] px-4 py-4 rounded-full"
      />
      <PrimaryBtn title="Login" onPress={() => nav.navigate("Home")} />
      <TouchableOpacity
        className="mb-10 mt-2 bg-white rounded-full p-4 w-[90%]"
        onPress={() => nav.navigate("SignUp")}
      >
        <Text
          className="text-center text-lg"
          style={{ color: primaryColor, fontWeight: 500 }}
        >
          Sign Up Now
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Login;
