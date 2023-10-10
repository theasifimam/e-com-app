import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { primaryColor } from "../utils/utils";

const BottomTab = ({ activeScreen }) => {
  const nav = useNavigation();

  function isActive(screenName) {
    return screenName === activeScreen ? primaryColor : "gray";
  }
  return (
    <View className="w-full bg-white flex-row justify-between items-center p-1">
      <TouchableOpacity
        className="flex items-center justify-center p-3 overflow-hidden rounded-full"
        onPress={() => nav.navigate("Home")}
      >
        <MaterialIcons name="home" size={32} color={isActive("Home", "1")} />
      </TouchableOpacity>

      <TouchableOpacity
        className="flex items-center justify-center p-3 overflow-hidden rounded-full"
        onPress={() => nav.navigate("Category")}
      >
        <MaterialIcons
          name="category"
          size={32}
          color={isActive("Category", "1")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        className="flex items-center justify-center p-3 overflow-hidden rounded-full"
        onPress={() => nav.navigate("Cart")}
      >
        <MaterialIcons
          name="shopping-cart"
          size={32}
          color={isActive("Cart", "1")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        className="flex items-center justify-center p-3 overflow-hidden rounded-full"
        onPress={() => nav.navigate("Profile")}
      >
        <MaterialIcons
          name="account-circle"
          size={32}
          color={isActive("Profile", "1")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;
