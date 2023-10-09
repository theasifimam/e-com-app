import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { user } from "../assets";
import { primaryColor } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { SET_FEEDS } from "../context/actions/feedsAction";
import { Feeds } from "../components";

const HomeScreen = () => {
  const [searchKey, setSearchKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { feeds } = useSelector((state) => state.feeds);

  const handleSearch = (text) => {
    setSearchKey(text);
  };

  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchData = async () => {
        const rawData = await fetch("https://fakestoreapi.com/products");
        const data = await rawData.json();

        dispatch(SET_FEEDS(data));
        setInterval(() => {
          setIsLoading(false);
        }, 2000);
      };
      fetchData();
    } catch (error) {
      console.log("error from fetching data", error);
      setIsLoading(false);
    }
  }, []);

  return (
    <SafeAreaView className="flex-1 justify-start bg-[#EBEAEF] pt-6">
      <View className="w-full flex-row items-center justify-between px-4 py-2">
        <MaterialIcons name="chevron-left" size={32} color="#555" />
        <Text className="text-xl">Search Products</Text>
        <Image
          source={user}
          className="w-12 h-12 rounded-xl"
          resizeMode="cover"
        />
      </View>

      {/* Search Box starts here */}
      <View className="flex-row items-center justify-between px-4 py-2 w-full space-x-6">
        <View className="px-4 py-2 bg-white rounded-xl flex-1 flex-row items-center justify-center space-x-2">
          <MaterialIcons name="search" size={24} color="#7f7f7f" />
          <TextInput
            className="text-base font-semibold text-[#555] flex-1 py-1"
            placeholder="Search..."
            onChangeText={handleSearch}
            value={searchKey}
          />
        </View>
        <TouchableOpacity className="w-12 h-12 flex rounded-xl items-center justify-center bg-white ">
          <MaterialIcons name="filter-list" size={24} color="#7f7f7f" />
        </TouchableOpacity>
      </View>
      {/* Search Box Ends here */}

      {/* Scrollable Container Starts here */}
      <ScrollView className="flex1 w-full">
        {isLoading ? (
          <View className="h-80 flex items-center justify-center">
            <ActivityIndicator color={primaryColor} size="large" />
          </View>
        ) : (
          <Feeds feeds={feeds} />
        )}
      </ScrollView>

      {/* Scrollable Container Ends here */}
    </SafeAreaView>
  );
};

export default HomeScreen;
