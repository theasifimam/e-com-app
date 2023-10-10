import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import { Bg9 } from "../assets";
import { PrimaryBtn } from "../components/UIComponents";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { primaryColor } from "../utils/utils";

const Login = () => {
  const nav = useNavigation();
  return (
    <ImageBackground
      source={Bg9}
      resizeMode="cover"
      className="h-full w-full flex justify-end items-center relative"
    >
      <StatusBar animated={true} barStyle="light-content" />
      <TouchableOpacity
        className="w-12 h-12 rounded-full absolute top-6 left-6 bg-white flex items-center justify-center"
        onPress={() => nav.goBack()}
      >
        <MaterialIcons name="chevron-left" size={32} color="#555" />
      </TouchableOpacity>
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
        secureTextEntry={true}
      />
      <PrimaryBtn title="Login" onPress={() => nav.navigate("Home")} />
      <View className="mb-6"></View>
    </ImageBackground>
  );
};

export default Login;
