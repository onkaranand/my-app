import { Drawer } from "expo-router/drawer"; // correct import
import React from "react";

const DrawerLayout = () => {
  return (
    <Drawer>    
      <Drawer.Screen name="(tabs)" options={{title:"Home"} }/>
    </Drawer>
  );
};

export default DrawerLayout;
