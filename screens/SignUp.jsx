import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import { primaryColor } from "../utils/utils";
import { Bg7 } from "../assets";
import { PrimaryBtn } from "../components/UIComponents";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar animated={true} barStyle="light-content" />

      <ImageBackground
        source={Bg7}
        resizeMode="cover"
        className="h-full w-full flex justify-end items-center relative"
      >
        <TouchableOpacity
          className="w-12 h-12 rounded-full absolute top-6 left-6 bg-white flex items-center justify-center"
          onPress={() => nav.goBack(null)}
        >
          <MaterialIcons name="chevron-left" size={32} color="#555" />
        </TouchableOpacity>

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
          secureTextEntry={true}
        />
        <PrimaryBtn title="Sign Up" />
        <View className="mb-6"></View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUp;
