import { View, Text, Image } from "react-native";
import React from "react";

const OnboardingItem = ({ item }) => {
  return (
    <View>
      <View>
        <Image source={item?.image} className="flex-1 w-full h-full"/>
      </View>
      <Text className="text-3xl">OnboardingItem</Text>
    </View>
  );
};

export default OnboardingItem;
