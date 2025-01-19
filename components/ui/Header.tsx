import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView className="flex justify-center items-center py-3 ">
      <Text className="text-2xl font-semibold ">Alteryouth</Text>
    </SafeAreaView>
  );
};

export default Header;
