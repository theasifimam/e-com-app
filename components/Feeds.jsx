import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { primaryColor } from "../utils/utils";

const Feeds = ({ feeds }) => {
  return (
    <View
      className="flex-row flex-wrap items-center justify-center"
      key={feeds?.id}
    >
      {feeds?.length === 0 ? (
        <View className="w-full h-64 flex items-center justify-center">
          <ActivityIndicator size="large" color={primaryColor} />
          <Text style={{ color: "grey" }}>No Data</Text>
        </View>
      ) : (
        feeds.map((p, i) => {
          return (
            <View>
              <Text>{p?.title}</Text>
            </View>
          );
        })
      )}
    </View>
  );
};

export default Feeds;
