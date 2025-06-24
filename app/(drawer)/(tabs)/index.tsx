import { Link } from 'expo-router';
import registerNNPushToken from 'native-notify';
import React from 'react';
import { Text, View } from 'react-native';
// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     console.log('Login Pressed');
//     console.log(`Email: ${email}, Password: ${password}`);
//   };

//   const isDisabled = email.trim() === '' || (password.trim() === '' ||  email.length < 6);

//   return (
//     //source={require('../../../assets/images/login.jpeg')} // 🔁 Replace with your actual image path
//     <View style={styles.container}>
//       <ImageBackground
//         source={require('../../../assets/images/login.jpeg')}
//         style={styles.container}
//         resizeMode="cover"
//       >
//         <Text style={styles.title}>Login</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           placeholderTextColor="#999"
//           keyboardType="email-address"
//           autoCapitalize="none"
//           value={email}
//           onChangeText={setEmail}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="#999"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />

//         <View style={styles.button}>
//           <Button title="Login" onPress={handleLogin} disabled={isDisabled} />
//         </View>
//       </ImageBackground>
//     </View>


//   );
// };

// export default LoginScreen;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 30,
//     backgroundColor: '#f8f8f8',
//     paddingBottom:10,
//     paddingTop:50,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 40,
//     textAlign: 'center',
//     color: "white",
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     marginBottom: 20,
//     fontSize: 16,
//     backgroundColor: '#fff',
//   },
//   button: {
//     marginTop: 10,
//   },
// });
// // 👇 Hide the header for this screen
// export const options = {
//   headerShown: false,
// };
export default function index() {
  registerNNPushToken(30777, 's4ZPRxX9UdN7eXVkpAFZCg');
  return (
    <View style={{flex:1}}>
      <Text style={{alignSelf:"center",justifyContent:'center',paddingTop:100}}>Home page </Text>
      <br></br>
      <Link style={{alignContent:"center", position:"fixed", justifyContent:"center", paddingLeft:80, backgroundColor:"yellow"}} href={"/search"}> Go to explore the Octa Verification </Link>
    </View>
  )
}

