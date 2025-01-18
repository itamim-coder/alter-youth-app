import { FlatList, Dimensions, Animated, View } from "react-native";
import React, { useRef, useState } from "react";
import { data } from "../../assets/data/slides";
import OnboardingItem from "./OnboardingItem";
import { SafeAreaView } from "react-native-safe-area-context";

const SCREEN_WIDTH = Dimensions.get("window").width; // Get screen width
const SCREEN_HEIGHT = Dimensions.get("window").height; // Get screen height

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <>
      <View className="flex-3">
        <FlatList
          data={data}
          renderItem={({ item }) => <OnboardingItem item={item} />} // Pass the item directly
          keyExtractor={(item) => item.id.toString()} // Ensure keys are unique
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <View className="flex-row justify-center items-center h-12 bg-white">
        {data.map((_, index) => (
          <View
            key={index}
            className={`h-3 w-3 rounded-full mx-1 ${
              currentIndex === index ? "bg-blue-500 w-4 h-4" : "bg-gray-300"
            }`}
          />
        ))}
      </View>
    </>
  );
};

export default Onboarding;
