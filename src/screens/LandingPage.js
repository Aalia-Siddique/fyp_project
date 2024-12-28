import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandingPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FIND YOUR BEST JOB</Text>
      <Text style={styles.subtitle}>BY <Text style={styles.brand}>GROW PAKISTAN</Text></Text>

      <Image 
        source={require('../../Images/landing_image.png')} 
        style={styles.image}
      />

      <Text style={styles.description}>
        Post a job and start receiving approaches from individuals
      </Text>

      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={() => navigation.navigate('LoginPage')}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        New to Grow Pakistan? <Text style={styles.signUpText}>Sign Up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 5,
  },
  brand: {
    color: '#00A86B', // Green color for "GROW PAKISTAN"
  },
  image: {
    width: 200,
    height: 170,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  description: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight:'bold',
    paddingLeft:40,
    paddingRight:40,
    

  },
  loginButton: {
    backgroundColor: '#00A86B',
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 5,
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  signUpText: {
    color: '#00A86B',
    fontWeight: 'bold',
  },
});

export default LandingPage;


