import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  Button
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker'

const ApplyNowForm = () => {
  const [countryCode, setCountryCode] = useState('+1'); // Default country code (US)
  const [selectedFile, setSelectedFile] = useState(null); // To store resume file
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility

  useEffect(() => {
    // Automatically open the modal when the component loads
    setModalVisible(true);
  }, []);

  const handleResumeUpload = async () => {
    try {
      const result = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.doc, DocumentPicker.types.docx],
      });
      setSelectedFile(result.name); // Store the name of the uploaded file
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled file upload.');
      } else {
        console.error(err);
      }
    }
  };

  const handleSubmit = () => {
    Alert.alert(
      'Form Submitted',
      `Your form has been submitted successfully!\n\nResume: ${
        selectedFile || 'No file uploaded'
      }`
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalView}>
      <TouchableOpacity
  style={styles.topRightCloseButton}
  onPress={() => setModalVisible(false)}
>
  {console.log("Rendering close button")}
  <Text style={styles.topRightCloseButtonText}>×</Text>
</TouchableOpacity>

        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.textStyle}>Apply to CureMd</Text>
          <View style={styles.horizontalLine} />
          <View style={styles.boxStyle}>
            <Image source={require('../../Images/Cetagories/profile_image.jpeg')} style={styles.icon} resizeMode="contain" />
            <View>
              <Text style={styles.Name}>Aalia Siddique</Text>
              <Text style={styles.textDescription}>PUCIT 25 || Software Engineer | ASP.NET Developer</Text>
            </View>
          </View>

          {/* First Name */}
          <Text style={styles.label}>First Name*</Text>
          <TextInput placeholder="Enter your First Name" style={{width:300,borderWidth:1,borderColor:'black',margin:10,borderRadius:10}} />

          {/* Last Name */}
          <Text style={styles.label}>Last Name*</Text>
          <TextInput placeholder="Enter your Last Name" style={{width:300,borderWidth:1,borderColor:'black',margin:10,borderRadius:10}} />

          {/* Phone Number with Country Code */}
          <Text style={styles.label}>Phone Number Country Code*</Text>
          <View style={styles.phoneInputWrapper}>
            <View style={styles.phoneInputContainer}>
              <Picker
                selectedValue={countryCode}
                style={[styles.picker,{height:30}]}
                onValueChange={(itemValue) => setCountryCode(itemValue)}
              >
                <Picker.Item label="+1 (USA)" value="+1" />
                <Picker.Item label="+44 (UK)" value="+44" />
                <Picker.Item label="+91 (India)" value="+91" />
                <Picker.Item label="+61 (Australia)" value="+61" />
                <Picker.Item label="+92 (Pakistan)" value="+92" />
              </Picker>
            </View>
          </View>

          {/* Phone Number */}
          <Text style={styles.label}>Phone No*</Text>
          <TextInput placeholder="Enter your phone number" style={{width:300,borderWidth:1,borderColor:'black',margin:10,borderRadius:10}} />

          {/* Upload Resume Section */}
          <Text style={styles.label}>Your Resume*</Text>
          <TouchableOpacity style={styles.uploadBox} onPress={handleResumeUpload}>
            <Image
              source={require('../../Images/Cetagories/Upload_cloud.png')} // Replace with the actual path of your upload icon
              style={styles.uploadIcon}
            />
            <Text style={styles.uploadText}>
              {selectedFile ? selectedFile : 'Upload your resume'}
            </Text>
          </TouchableOpacity>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Close Modal Button */}
        {/* <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setModalVisible(false)}
        >
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity> */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  
    // Semi-transparent background
  
  container: {
    backgroundColor: 'white',
    padding: 16,
    width: '90%',
    borderRadius: 10,
    margin:10
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'InriaSerif-Regular',
    marginBottom: 10,
    color: 'black',
  },
  horizontalLine: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 10,
    width: '100%',
  },
  boxStyle: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  icon: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  Name: {
    margin: 10,
    fontWeight: 'bold',
  },
  textDescription: {
    marginLeft: 10,
    fontSize: 11,
    color: 'gray',
  },
  label: {
    margin: 10,
    marginBottom: 0,
    fontSize: 12,
    color: 'black',
  },
  inputStyle: {
    width: '98%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
    margin: 10,
    paddingLeft: 10,
  },
  phoneInputWrapper: {
    marginHorizontal: 10,
    marginTop: 5,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  picker: {
    flex: 1,
    height: 50,
    marginRight: 5,
  },
  uploadBox: {
    width: 300,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#f9f9f9',
  },
  uploadIcon: {
    width: 30,
    height: 30,
    marginBottom: 8,
  },
  uploadText: {
    fontSize: 15,
    color: 'gray',
  },
  submitButton: {
    width:100,
    backgroundColor: '#10A881',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    margin: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#ff4444',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  topRightCloseButton: {
    zIndex: 10, // Higher z-index to ensure visibility
    position: 'absolute',
    top: 15,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 30,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topRightCloseButtonText: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
  },
});

export default ApplyNowForm;
