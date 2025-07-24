import { colors } from "@/styles/colors";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";

export default function RootLayout() {
  const backgroundColor = colors.gray[950];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor },
        }}
      >
        <Stack.Screen name="index/index" />
        <Stack.Screen name="add/index" />
      </Stack>
    </SafeAreaView>
  );
}
