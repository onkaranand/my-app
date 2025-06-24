
import { Text, View } from "react-native";
export default function About() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "purple" }}>
        <Text  style= {{color:"white",fontSize:20}}> Thank you for contacting us Onkar</Text>
    </View>
  );
}

//Hide the header for this screen
export const options = {
  headerShown: false,
};

