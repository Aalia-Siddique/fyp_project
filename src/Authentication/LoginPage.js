import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const LoginPage = () => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Image 
          source={require('../../Images/Designer1.png')} // Replace with your lock icon path
          style={styles.image}
        />
      {/* <Text style={styles.label}>Phone No</Text> */}
      {/* Phone Input */}
      <View style={styles.inputContainer}>
        <Image 
          source={require('../../assests/icons/telephone.png')} // Replace with your phone icon path
          style={styles.icon}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Enter your phone number" 
          placeholderTextColor={"#aaa"}
          keyboardType="phone-pad"
        />
      </View>
      {/* <Text style={styles.label}>Password</Text> */}
      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Image 
          source={require('../../assests/icons/padlock.png')} // Replace with your lock icon path
          style={styles.icon}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Enter your password" 
           placeholderTextColor="#aaa"
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisibility(!isPasswordVisible)}>
          <Image 
            source={require('../../assests/icons/hide.png')} // Replace with your eye icon path
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>
        Don’t have an account? 
        <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
          <Text style={styles.signUpText}> Sign Up</Text>
        </TouchableOpacity>
      </Text>


      <Text style={styles.orText}>or</Text>

      {/* Google Login */}
      <TouchableOpacity style={styles.googleButton}>
        <Image 
          source={require('../../assests/icons/google.png')} // Replace with your Google logo path
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#555',
        marginBottom: 5,
        justifyContent: 'start'
      },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color:'black'
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  loginButton: {
    backgroundColor: '#00A86B',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 5,
    marginTop: 15,
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
    marginTop: 15,
    textAlign: 'center',
  },
  signUpText: {
    color: '#00A86B',
    fontWeight: 'bold',
    marginTop:9
  },
  orText: {
    fontSize: 14,
    color: '#555',
    marginVertical: 10,
    textAlign: 'center',
  },
  googleButton: {
    backgroundColor: '#FFF',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default LoginPage;
