import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import "../../../global.css";
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel:false,
      tabBarStyle:{
        backgroundColor: 'white',
        borderRadius: 50,
        marginHorizontal:20,
        marginBottom:36,
        height:52,
        overflow:"hidden",
        position:"absolute",
        borderWidth:1,
        borderColor:"purle"

      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Login",
          headerShown:false,
          tabBarShowLabel:true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
           headerShown:false,
           tabBarShowLabel:true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown:false,
          tabBarShowLabel:true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-circle-outline" size={size} color={color} />
          ),
        }}
      />
     <Tabs.Screen
        name="startNow"
        options={{
          title: "StartNow",
          headerShown:false,
          tabBarShowLabel:true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="edit"
        options={{
          title: "Edit",
          headerShown:false,
          tabBarShowLabel:true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="expand-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
    
  );
}
