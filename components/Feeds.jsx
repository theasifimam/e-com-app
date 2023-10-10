import {
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { primaryColor } from "../utils/utils";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Feeds = ({ feeds }) => {
  const screenWidth = Math.round(Dimensions.get("window").width);
  const cardWidth = screenWidth / 2 - 25;
  return (
    <View className="flex-row flex-wrap justify-center">
      {/* <Text style={{ width: cardWidth, height: "auto" }}>Found Results</Text> */}
      {feeds?.length === 0 ? (
        <View className="w-full h-64 flex items-center justify-center">
          <ActivityIndicator size="large" color={primaryColor} />
          <Text style={{ color: "grey" }}>No Data</Text>
        </View>
      ) : (
        feeds.map((p, i) => {
          return <FeedDetail {...p} key={i} />;
        })
      )}
    </View>
  );
};

export default Feeds;

const FeedDetail = ({ title, image, description, price, id }) => {
  const [fav, setFav] = useState(false);
  const screenWidth = Math.round(Dimensions.get("window").width);
  const cardWidth = screenWidth / 2 - 25;
  const nav = useNavigation();

  const handleClick = () => {
    nav.navigate("Product", id);
  };

  return (
    <TouchableOpacity
      className="p-4 rounded-xl bg-white flex items-center justify-center m-2"
      style={{ width: cardWidth }}
      onPress={handleClick}
    >
      <Image
        source={{ uri: image }}
        resizeMode="contain"
        className="w-24 h-40"
      />
      <Text
        className="text-black-800 w-full font-bold text-left"
        style={{ color: primaryColor }}
      >
        {title?.length > 15 ? title?.slice(0, 15) + "..." : title}
      </Text>
      <Text className="text-left w-full text-gray-600 text-sm leading-4">
        {description?.length > 15
          ? description?.slice(0, 15) + "..."
          : description}
      </Text>

      <View className="w-full flex-row items-center justify-between">
        <Text
          className="text-black-900 font-bold text-lg"
          style={{ color: primaryColor }}
        >
          ${price}
        </Text>

        <TouchableOpacity onPress={() => setFav(!fav)}>
          <FontAwesome
            name={fav ? "heart" : "heart-o"}
            size={24}
            color={primaryColor}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
