import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { user } from "../assets";
import { primaryColor } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const CategoryScreen = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#EBEAEF" />
      <View className="w-full h-full bg-[#EBEAEF] pt-5">
        <View className="w-full flex-row items-center justify-between px-4 py-2 -mt-6">
          <MaterialIcons
            name="chevron-left"
            size={32}
            color="#555"
            onPress={() => nav.goBack(null)}
          />
          <Text
            className="text-xl"
            style={{ color: primaryColor, fontWeight: 900, fontSize: 30 }}
          >
            Categories
          </Text>
          <Image
            source={user}
            className="w-12 h-12 rounded-xl"
            resizeMode="cover"
          />
        </View>

        <ScrollView>
          <View className="flex-row flex-wrap justify-between w-full gap-y-2 p-4">
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-xl flex justify-center items-center gap-2">
              <MaterialIcons
                name="android"
                size={32}
                color="#555"
                onPress={() => nav.goBack(null)}
              />
              <Text>Electronics</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;
