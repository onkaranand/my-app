// import SearchBar from "@/components/searchBar";
// import { useRouter } from "expo-router";
// import React from "react";
// import { Image, StyleSheet, View } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";

// export default function About() {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require("../../../assets/images/VITAS_Healthcare_logo.png")}
//         style={styles.image}
//       />
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View>
//           <SearchBar
//             onPress={() => router.push("/search")}
//             placeholder="Search a patient"
//           />
          
//         </View>
//       </ScrollView>
//     </View>
    
//   );
// }

// // Hide the header for this screen
// export const options = {
//   headerShown: false,
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     flex: 1,
//   },
//   image: {
//     alignSelf: "center",
//     marginTop: 20,
//     maxHeight: 75,
//     maxWidth: 180,
//   },
// });
// import { useLocalSearchParams } from 'expo-router';
// import React, { useEffect } from 'react';
// import { Text } from 'react-native';

// export default function Callback() {
//   const { code } = useLocalSearchParams();
//   useEffect(() => {
//     if (code) {
//       console.log('Auth code:', code);
//       // Exchange for tokens
//     }
//   }, [code]);

//   return <Text>Authorization Code: {code}</Text>;
// }
// App.tsx or a specific screen file

import Constants from 'expo-constants';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const roles = [
  'Physician (MD or DO)',
  'Advanced Practice Provider (PA, NP, APRN)',
  'Nurse (RN, BSN)',
  'Therapy Services (OT, PT, RD, RT, SLP)',
  'Social Worker (LCSW, MSW)',
  'Healthcare Administrator',
  'VITAS Employee'
];

export default function RoleSelectionScreen() {
  const handleRoleSelect = (role: string) => {
    console.log('Selected Role:', role);
    // Navigate to next step or save to state
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.stepText}>Step 1 of 2</Text>
        <Text style={styles.title}>What is your role?</Text>
        <Text style={styles.subTitle}>You can change this later in your profile.</Text>

        <View style={styles.rolesContainer}>
          {roles.map((role, index) => (
            <TouchableOpacity key={index} style={styles.button} onPress={() => handleRoleSelect(role)}>
              <Text style={styles.buttonText}>{role}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingBottom: 40,
  },
  stepText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
    fontSize: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  rolesContainer: {
    flex:1,
    backgroundColor: '#5F2C82', // purple vitas color
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop:50,
    marginTop:100

    
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 8,
    alignItems: 'center',
    marginTop:10
  },
  buttonText: {
    color: '#5F2C82',
    fontWeight: '500',
    fontSize: 16,
  },
});
