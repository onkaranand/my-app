import { Text, View } from "react-native";
import "../../global.css";

export default function SettingsScreen() {
  return (
    <View className="flex-1 items-center justify-center" >
      <Text className="text-2xl font-semibold text-red-600">⚙️ Settings Screen</Text>
    </View>
  );
}
//style={{ flex: 1, justifyContent: "center", alignItems: "center" }}