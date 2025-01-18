import { View, Text } from "react-native";
import React from "react";
import Onboarding from "@/components/onboard/Onboarding";
import { Redirect, useRouter } from "expo-router";
const index = () => {
  const router = useRouter();

  const isLogged = true; // Replace with actual authentication check

  if (isLogged) return <Redirect href="/(tabs)" />;

  return (
    <>
      <Onboarding></Onboarding>
    </>
  );
};

export default index;
