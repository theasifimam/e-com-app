import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { primaryColor } from "../utils/utils";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
import { Bg1, Bg2, Product1, Product2, Product3 } from "../assets";
import { PrimaryBtn } from "../components/UIComponents";

const initialValue = {
  id: null,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  rating: {
    rate: 0,
    count: 0,
  },
};

const ProductScreen = ({ route }) => {
  const id = route.params;
  const [product, setProduct] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const screenHeight = Math.round(Dimensions.get("window").height);
  const [fav, setFav] = useState(false);
  const nav = useNavigation();
  useEffect(() => {
    try {
      setIsLoading(true);
      async function fetchData() {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setIsLoading(false);
      }
      fetchData();
    } catch (error) {
      console.log("Error from product page", error);
      setIsLoading(false);
    }
  }, []);

  return (
    <View className="flex-1 items-start justify-start bg-[#EBEAEf] space-y-4">
      {isLoading ? (
        <View className="w-full h-full flex-1 justify-center items-center">
          <ActivityIndicator color={primaryColor} size="large" />
        </View>
      ) : (
        <>
          <StatusBar
            animated={true}
            barStyle="dark-content"
            backgroundColor="#EBEAEF"
          />
          <ScrollView className="w-full -mb-4">
            <SafeAreaView className="w-full">
              {/* Top Section */}
              <View className="flex-row w-full justify-between items-center h-14 px-4">
                <TouchableOpacity>
                  <MaterialIcons
                    name="chevron-left"
                    size={32}
                    color="#555"
                    onPress={() => nav.goBack(null)}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MaterialIcons
                    name="shopping-cart"
                    size={32}
                    color="#555"
                    onPress={() => nav.goBack(null)}
                  />
                </TouchableOpacity>
              </View>

              {/* Image Section */}
              <View
                className="w-full flex items-center justify-center relative"
                style={{ height: screenHeight / 2 - 50 }}
              >
                <Swiper
                  activeDot={
                    <View
                      style={{
                        backgroundColor: primaryColor,
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 3,
                      }}
                    />
                  }
                >
                  <Image
                    source={Product1}
                    resizeMode="contain"
                    className="w-full h-full"
                  />
                  <Image
                    source={Product2}
                    resizeMode="contain"
                    className="w-full h-full"
                  />
                  <Image
                    source={Product3}
                    resizeMode="contain"
                    className="w-full h-full"
                  />
                </Swiper>
              </View>
            </SafeAreaView>

            <View className="w-full bg-white rounded-t-[36px] h-72 p-6 mt-4">
              <Text className="font-extrabold text-xl">{product.title}</Text>
              <Text>Size - 28,30,32</Text>
              <View className="flex-row justify-between items-center mt-3">
                <Text>{product.price}</Text>
                <View className="w-[50%] flex-row  rounded-full items-center justify-evenly">
                  <TouchableOpacity className="h-8 w-8 flex items-center justify-center">
                    <Text className="h-8 w-8 flex items-center justify-center">
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text className="h-8 w-8 flex items-center justify-center">
                    2
                  </Text>
                  <TouchableOpacity className="h-8 w-8 flex items-center justify-center">
                    <Text className="h-8 w-8 flex items-center justify-center">
                      +
                    </Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity onPress={() => setFav(!fav)}>
                    <FontAwesome
                      name={fav ? "heart" : "heart-o"}
                      size={24}
                      color={primaryColor}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <Text className="text-gray-500 py-4 text-justify">
                {product.description}
              </Text>
            </View>
          </ScrollView>
          <View className="w-full flex items-center justify-center bg-white py-2">
            <TouchableOpacity
              style={{
                padding: 15,
                width: "90%",
                backgroundColor: primaryColor,
                borderRadius: 50,
              }}
            >
              <Text className="w-full text-center text-white font-bold text-xl">
                Buy
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default ProductScreen;
