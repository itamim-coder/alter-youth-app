import Community from "@/components/Home/Community";
import School from "@/components/Home/School";
import VideoScreen from "@/components/Home/Video";

import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";


export default function HomeScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white"
    >
      <View className="flex-[0.4] justify-center items-start p-12 bg-green-100">
        <Text className="text-3xl font-semibold mb-4">Hey User!</Text>
        <Text className="text-left mb-6 leading-6">
          You have no active scholarships. Join the #alteryouthrevoulution and
          start your journey.
        </Text>
        <TouchableOpacity className="bg-green-400 w-full py-4 rounded-lg">
          <Text className="text-center font-semibold text-white">
            START SCHOLARSHIPS
          </Text>
        </TouchableOpacity>
      </View>
      <Community />
    </ScrollView>
  );
}
