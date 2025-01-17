import { View, Text, FlatList } from "react-native";
import React from "react";
import slides from "../../assets/data/slides.json";
import OnboardingItem from "./OnboardingItem";
const Onboarding = () => {
  return (
    <View>
      <Text>Onboarding</Text>
      <FlatList data={slides} renderItem={(item)=> <OnboardingItem item={item}/>} />
    </View>
  );
};

export default Onboarding;
