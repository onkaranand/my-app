// app/_layout.tsx (Top-level layout file)
import { Stack } from "expo-router";
import React from "react";
// If you're using NativeWind or Tailwind, the global.css is fine:
import { Provider } from "react-native-paper";
import "../global.css";

const RootLayout = () => {
  return (
    <Provider>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(drawer)" />
    </Stack>
    </Provider>
  );
};

export default RootLayout;
