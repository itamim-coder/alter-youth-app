import { View, Text } from "react-native";
import React from "react";
import Onboarding from "@/components/onboard/Onboarding";

const index = () => {
  return (
    <View className="bg-yellow-300 flex-1">
        <Text className="text-2xl">hello</Text>
      <Onboarding></Onboarding>
    </View>
  );
};

export default index;
