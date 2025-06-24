// import React from 'react';
//import { Text, View,Button } from 'react-native';

// const search = () => {
//   return (
//     <View>
//       <Text>search</Text>
//     </View>
//   )
// }

// export default search;
// App.tsx
// import * as AuthSession from 'expo-auth-session';
// import React, { useEffect } from 'react';
// import { Button, Text, View } from 'react-native';

// const discovery = {
//   authorizationEndpoint: 'https://dev-74zabdve3bj6hsie.us.auth0.com/authorize',
//   tokenEndpoint: 'https://dev-74zabdve3bj6hsie.us.auth0.com/oauth/token',
//   revocationEndpoint: 'https://dev-74zabdve3bj6hsie.us.auth0.com/oauth/revoke',
// };


// export default function App() {
//     const redirectUri = 'http://localhost:8081/about';

//   console.log('Redirect URI:', redirectUri); 

//   const [request, response, promptAsync] = AuthSession.useAuthRequest(
//     {
//       clientId: 'nJqjjSLRMw6pkuCxovKPvcE2LSy4OT0W',
//       redirectUri: AuthSession.makeRedirectUri({
//         scheme: 'myapp',
//         path: 'about', // same as your Okta redirect URI
//       }),

//       scopes: ['openid', 'profile', 'email'],
//       responseType: AuthSession.ResponseType.Code,

//     },
//     discovery
//   );

//   useEffect(() => {
//     if (response?.type === 'success') {
//       const { code } = response.params;
//       console.log('Authorization Code:', code);

//     }
//   }, [response]);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Okta Login </Text>
//       <Button
//         title="Login with Okta"
//         disabled={!request}
//         onPress={() => promptAsync()}
//       />
//     </View>
//   );
//  }





import axios from 'axios';
import * as AuthSession from 'expo-auth-session';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

//const issuer = 'https://dev-74811352.okta.com/oauth2/default';
//const issuer = 'https://trial-9228989-admin.okta.com/oauth2/default';
const issuer = 'https://trial-9228989.okta.com/oauth2/default';
//const clientId = '0oap7s6gl0oKI3Y6q5d7';
const clientId ='0oasfbuq0v2TUXy6m697';  //new app ka client id
//domain: https://trial-9228989.okta.com
const discovery = {
    authorizationEndpoint: `${issuer}/v1/authorize`,
    tokenEndpoint: `${issuer}/v1/token`,
    revocationEndpoint: `${issuer}/v1/revoke`,
};


export default function App() {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(false);


    const redirectUri = AuthSession.makeRedirectUri({
        scheme: 'my-app',  //native app name 
        path: 'about',   // Okta sends the auth response to this path (screen in app )
    }); //When Okta finishes login, send the response to my mobile app using this deep link scheme

// const redirectUri = AuthSession.makeRedirectUri({
//   path: 'about',
// });
    console.log(" Redirect URI:", redirectUri);


    const [request, response, promptAsync] = AuthSession.useAuthRequest(
        {
            clientId,
            redirectUri,
            scopes: ['openid', 'profile', 'email'],
            responseType: 'code',
            usePKCE: true,
        },
        discovery
    );

    useEffect(() => {
        const fetchUserInfo = async () => {
            if (response?.type === 'success') {
                setLoading(true);
                try {
                    const tokenResult = await AuthSession.exchangeCodeAsync(
                        {
                            clientId,
                            code: response.params.code,
                            redirectUri,
                            extraParams: {
                                code_verifier: request?.codeVerifier!,
                            },
                        },
                        discovery
                    );

                    const res = await axios.get(`${issuer}/v1/userinfo`, {
                        headers: {
                            Authorization: `Bearer ${tokenResult.accessToken}`,
                        },
                    });

                    setUserInfo(res.data);
                    console.log(' User Info:', res.data);
                    router.push('/about');
                } catch (err) {
                    console.error('Login error:', err);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchUserInfo();
    }, [response]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {loading ? (
                <ActivityIndicator />
            ) : userInfo ? (
                <Text>Welcome, {userInfo}</Text>
            ) : (
                <>
                    <Text>Login with Okta</Text>
                    <Button title="Login" onPress={() => promptAsync()} disabled={!request} />
                </>
            )}
        </View>
    );
}






// import { makeRedirectUri, useAuthRequest, useAutoDiscovery } from 'expo-auth-session';
// import * as WebBrowser from 'expo-web-browser';
// import { useEffect } from 'react';
// import { Button, StyleSheet, View } from 'react-native';


// WebBrowser.maybeCompleteAuthSession();


// export default function App() {
//   // Endpoint
//   const discovery = useAutoDiscovery('https://https://dev-74811352.okta.com/oauth2/default');
//   // Request
//   const [request, response, promptAsync] = useAuthRequest(
//     {
//       clientId: '0oasfbuq0v2TUXy6m697',
//       scopes: ['openid', 'profile'],
//       redirectUri: makeRedirectUri({
//         native: 'com.okta.https://dev-74811352.okta.com:/about',
        
//       }),
      
//     },
//     discovery
//   );

//   useEffect(() => {
//     if (response?.type === 'success') {
//       const { code } = response.params;
//     }
//   }, [response]);

//  return (
//   <View style={styles.container}>
//     <Button 
//       title="Login"
//       onPress={() => {
//         promptAsync();
//       }}
//     />
//   </View>
// );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // takes full screen
//     justifyContent: 'center', // vertical center
//     alignItems: 'center',     // horizontal center
//   },
// });




