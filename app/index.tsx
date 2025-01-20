import { View, Text } from "react-native";
import React from "react";
import Onboarding from "@/components/onboard/Onboarding";
import { Redirect } from "expo-router";
const index = () => {
  

  const isLogged = false; // Replace with actual authentication check

  if (isLogged) return <Redirect href="/(tabs)" />;

  return (
    <>
      <Onboarding></Onboarding>
    </>
  );
};

export default index;
