
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Tab from '../navigation/Tab';

const SignUpPage = ({ navigation }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [open, setOpen] = useState(false); // For managing the dropdown
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [cities, setCities] = useState([
    { label: 'Karachi', value: 'karachi' },
    { label: 'Lahore', value: 'lahore' },
    { label: 'Islamabad', value: 'islamabad' },
    { label: 'Rawalpindi', value: 'rawalpindi' },
    { label: 'Faisalabad', value: 'faisalabad' },
    { label: 'Multan', value: 'multan' },
    { label: 'Peshawar', value: 'peshawar' },
    { label: 'Quetta', value: 'quetta' },
    { label: 'Sialkot', value: 'sialkot' },
    { label: 'Hyderabad', value: 'hyderabad' },
  ]);
  const handleSignUp = () => {
    // Perform sign-up validation here
    // Navigate to Home Page
    navigation.navigate('Tab');
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsPickerVisible(false); // Hide picker after selecting a city
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Image 
          source={require('../../Images/Designer1.png')} // Replace with your lock icon path
          style={styles.image}
        />

      {/* First Name */}
      <Text style={styles.label}>First Name</Text>
      <View style={styles.inputContainer}>
        <Image
          source={require('../../assests/icons/user1.png')}
          style={[styles.icon, { tintColor:  '#00A86B', }]}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your first name"
          placeholderTextColor="#aaa"
          value={formData.firstname}
          onChangeText={(value) => handleInputChange('firstname', value)}
        />
      </View>

      {/* Last Name */}
      <Text style={styles.label}>Last Name*</Text>
      <View style={styles.inputContainer}>
        <Image
          source={require('../../assests/icons/user1.png')}
          style={[styles.icon, { tintColor:  '#00A86B', }]}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your last name"
          placeholderTextColor="#aaa"
          value={formData.lastname}
          onChangeText={(value) => handleInputChange('lastname', value)}
        />
      </View>

      {/* Phone Number */}
      <Text style={styles.label}>Phone Number*</Text>
      <View style={styles.inputContainer}>
        <Image
          source={require('../../assests/icons/telephone.png')}
          style={[styles.icon, { tintColor:  '#00A86B', }]}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
          value={formData.phoneNumber}
          onChangeText={(value) => handleInputChange('phoneNumber', value)}
        />
      </View>

      {/* Password */}
      <Text style={styles.label}>Password*</Text>
      <View style={styles.inputContainer}>
        <Image
          source={require('../../assests/icons/padlock.png')}
          style={[styles.icon, { tintColor:  '#00A86B', }]}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#aaa"
          secureTextEntry={!showPassword}
          value={formData.password}
          onChangeText={(value) => handleInputChange('password', value)}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={[styles.icon, { tintColor:  '#00A86B', }]}
        >
          <Image
            source={
              showPassword
                ? require('../../assests/icons/hide.png')
                : require('../../assests/icons/hide.png')
            }
            style={[styles.icon, { tintColor:  '#00A86B', }]}
          />
        </TouchableOpacity>
      </View>

      {/* Confirm Password */}
      <Text style={styles.label}>Confirm Password*</Text>
      <View style={styles.inputContainer}>
        <Image
          source={require('../../assests/icons/padlock.png')}
          style={[styles.icon, { tintColor:  '#00A86B', }]}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          placeholderTextColor="#aaa"
          secureTextEntry={!showConfirmPassword}
          value={formData.confirmPassword}
          onChangeText={(value) => handleInputChange('confirmPassword', value)}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          style={[styles.icon, { tintColor:  '#00A86B', }]}
        >
          <Image
            source={
              showConfirmPassword
                ? require('../../assests/icons/hide.png')
                : require('../../assests/icons/hide.png')
            }
            style={[styles.icon, { tintColor: '#00A86B' }]}
          />
        </TouchableOpacity>
      </View>
             {/* Address */}
             <Text style={styles.label}>Address*</Text>
      <View style={styles.inputContainer}>
        <Image source={require('../../assests/icons/maps-and-flags.png')} style={[styles.icon, { tintColor:  '#00A86B', }]}/>
        <TextInput
          style={styles.input}
          placeholder="Enter your Address"
            placeholderTextColor="#aaa"
          value={formData.address}
          onChangeText={(value) => handleInputChange('address', value)}
        />
      </View>

      {/* City */}
      <Text style={styles.label}>City</Text>

<TouchableOpacity
  style={styles.inputContainer}
  onPress={() => setIsPickerVisible(!isPickerVisible)} // Toggle picker visibility
>
  {/* TextInput with selected city or placeholder */}
  <TextInput
    style={styles.input}
    placeholder="Select your city"
    placeholderTextColor="#888"
    value={selectedCity}
    editable={false} // Make the input non-editable
  />

  {/* PNG Icon */}
  <Image
    source={require('../../assests/icons/drop_down.png')} // Replace with your image path
    style={styles.icon}
  />
</TouchableOpacity>

{isPickerVisible && (
  <Picker
    selectedValue={selectedCity}
    onValueChange={(itemValue) => handleCitySelect(itemValue)}
    style={styles.picker}
  >
    <Picker.Item label="Select your city" value="" />
    <Picker.Item label="Karachi" value="Karachi" />
    <Picker.Item label="Lahore" value="Lahore" />
    <Picker.Item label="Islamabad" value="Islamabad" />
    <Picker.Item label="Rawalpindi" value="Rawalpindi" />
    <Picker.Item label="Faisalabad" value="Faisalabad" />
  </Picker>
)}
      {/* <Text style={styles.selectedText}>
        Selected City: {selectedCity ? selectedCity : 'None'}
      </Text> */}

      {/* CNIC */}
      <Text style={styles.label}>CNIC*</Text>
      <View style={styles.inputContainer}>
        <Image source={require('../../assests/icons/cnic.png')}style={[styles.icon, { tintColor:  '#00A86B', }]}/>
        <TextInput
          style={styles.input}
          placeholder="Enter your CNIC"
            placeholderTextColor="#aaa"
          value={formData.cnic}
          onChangeText={(value) => handleInputChange('cnic', value)}
        />
      </View>
      {/* Sign Up Button */}
      <View style={styles.footer}>
      <Text style={styles.footerText}>
        Already have an account? <Text style={styles.signUpText}>Login in</Text>
      </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
    </ScrollView>

    
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#555',
  },
  loginLink: {
    fontSize: 16,
    color: '#007BFF',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop:5,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    
    marginLeft:70,
    marginTop:10
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#888',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
    padding:10
  },
  eyeIcon: {
    padding: 5,
  },
  button: {
    backgroundColor:  '#00A86B',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin:20,
    marginBottom:40
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  selectedText: {
    fontSize: 16,
    marginTop: 20,
    color: '#333',
  },
  footerText: {
    fontSize: 14,
    color: 'black',
    marginTop: 15,
    textAlign: 'center',
  },
  signUpText: {
    color: '#00A86B',
    fontWeight: 'bold',
  },
});

export default SignUpPage;
