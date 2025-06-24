import React from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

interface SearchBarProps {
  onPress: () => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onPress, placeholder }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={require("../assets/images/search.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#a8b5db"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
  },
});

export default SearchBar;
