import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import {
    Alert,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import { Appbar, Button, Menu, TextInput } from 'react-native-paper';

export default function EditProfileScreen() {
  const [roleVisible, setRoleVisible] = useState(false);
  const [role, setRole] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const roles = ['Admin', 'User', 'Manager'];

  // 👇 Function to launch image picker
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'We need access to your photos.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      ///setImageUri(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Edit Your Profile" titleStyle={{ textAlign: 'center' }} />
        <Button onPress={() => {}} labelStyle={{ color: '#fff', fontWeight: 'bold' }} mode="text">
          Done
        </Button>
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            source={
              imageUri
                ? { uri: imageUri }
                : require('../../../assets/images/avtaar.jpeg') // Replace with your placeholder
            }
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editIcon} onPress={pickImage}>
            <MaterialIcons name="edit" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        <TextInput label="First Name" style={styles.input} mode="outlined" />
        <TextInput label="Last Name" style={styles.input} mode="outlined" />

        <Menu
          visible={roleVisible}
          onDismiss={() => setRoleVisible(false)}
          anchor={
            <TouchableOpacity onPress={() => setRoleVisible(true)}>
              <TextInput
                label="Role"
                mode="outlined"
                value={role}
                editable={false}
                right={<TextInput.Icon icon="menu-down" />}
                style={styles.input}
              />
            </TouchableOpacity>
          }>
          {roles.map((r, idx) => (
            <Menu.Item
              key={idx}
              onPress={() => {
                setRole(r);
                setRoleVisible(false);
              }}
              title={r}
            />
          ))}
        </Menu>

        <TextInput label="Discipline License #" style={styles.input} mode="outlined" />
        <TextInput label="Email" style={styles.input} mode="outlined" keyboardType="email-address" />
        <TextInput label="Phone Number" style={styles.input} mode="outlined" keyboardType="phone-pad" />
        <TextInput label="ZIP Code" style={styles.input} mode="outlined" keyboardType="number-pad" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#6200ee',
  },
  container: {
    padding: 20,
    paddingBottom: 60,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  editIcon: {
    backgroundColor: '#6200ee',
    borderRadius: 12,
    padding: 4,
    position: 'absolute',
    bottom: 0,
    right: 140, // Adjust based on alignment
  },
  input: {
    marginVertical: 6,
  },
});
