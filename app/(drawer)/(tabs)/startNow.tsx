import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.thankYouText}>Thank you for choosing</Text>
        <Text style={styles.brandText}>VITAS</Text>
        <Text style={styles.description}>
          A tool for healthcare professionals from the leader of end-of-life care.
        </Text>

        <Image
          source={require('../../../assets/images/book.png')} // Replace with your actual image path
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.newsText}>News</Text>
      </View>

      <View style={styles.bottomBar}>
        <Text style={styles.footerText}>
          Quickly personalize the app for the best experience.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    marginTop: 60,
    paddingHorizontal: 20,
  },
  thankYouText: {
    fontSize: 18,
    color: '#333',
  },
  brandText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 6,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  newsText: {
    fontSize: 16,
    color: '#444',
    marginTop: 10,
  },
  bottomBar: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#4B0082', // Replace with purple tone as per your screenshot
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  footerText: {
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#4B0082',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
