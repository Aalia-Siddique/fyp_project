// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
//   Image,
// } from 'react-native';

// // Define the type for a message
// type Message = {
//   id: string;
//   text: string;
// };

// const ChattingPage = () => {
//   // Define the state with the correct type
//   const [messages, setMessages] = useState<Message[]>([]); // messages is an array of Message objects
//   const [currentMessage, setCurrentMessage] = useState(''); // Input text

//   // Function to handle sending messages
//   const sendMessage = () => {
//     if (currentMessage.trim()) {
//       setMessages([
//         ...messages,
//         { id: Date.now().toString(), text: currentMessage },
//       ]);
//       setCurrentMessage('');
//     }
//   };

//   return (
    
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       {/* Chat Messages Display */}
//       <FlatList
//         data={messages}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.messageContainer}>
//             <Text style={styles.messageText}>{item.text}</Text>
//           </View>
//         )}
//         contentContainerStyle={styles.chatContainer}
//       />

//       {/* Input Area */}
//       <View style={styles.inputContainer}>
//       <TouchableOpacity style={styles.voice}>
//           <Image
//             source={require('../../assests/icons/voice.png')}
//             resizeMode="contain"
//             style={styles.image}
//           />
//         </TouchableOpacity>
//         <TextInput
//           style={styles.textInput}
//           value={currentMessage}
//           onChangeText={setCurrentMessage}
//           placeholder="Type your message..."
//           placeholderTextColor="#aaa"
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
       
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   voice: {
//     marginLeft: 2, // Space between search bar and voice icon
//     justifyContent: 'center',
//     alignItems: 'center',
    
   
    
//     borderRadius:20,
//   },image:{
//     width: 20,
//     height: 20,
//     tintColor: '#6ab04c',
//     padding:0,
//     margin:0,
    
// },
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//   },
//   chatContainer: {
//     flexGrow: 1,
//     justifyContent: 'flex-end', // Messages stick to the bottom
//     padding: 10,
//   },
//   messageContainer: {
//     marginBottom: 10,
//     alignSelf: 'flex-end',
//     backgroundColor: '#6ab04c',
//     borderRadius: 8,
//     padding: 10,
//     maxWidth: '70%',
//   },
//   messageText: {
//     fontSize: 16,
//     color: '#fff',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderTopWidth: 1,
//     borderColor: '#ddd',
//     backgroundColor: '#fff',
//     marginBottom:10,
//   },
//   textInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     backgroundColor: '#f5f5f5',
//     height: 40,
//   },
//   sendButton: {
//     marginLeft: 10,
//     backgroundColor: '#6ab04c',
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     borderRadius: 20,
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default ChattingPage;


// Home.js
// import React from 'react';
// import { View, Text } from 'react-native';
// const PostJob = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Welcome to post job</Text>
//     </View>
//   );
// };

// export default PostJob;




import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    TextInput,
    Modal,
    Button,
    ScrollView,
  } from "react-native";
import { Picker } from '@react-native-picker/picker';



const PostJob = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [experienceType, setExperienceType] = useState('');
  const [minExperience, setMinExperience] = useState('');
  const [maxExperience, setMaxExperience] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [bonus, setBonus] = useState(false); // Default "No"
  const [jobDescription, setJobDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [sections, setSections] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [degreeModalVisible, setDegreeModalVisible] = useState(false);
  const [selectedDegree, setSelectedDegree] = useState("");
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const sectionTypes = [
    "Age",
    "Preferred Language",
    "Assets",
    "Degree and Specialisation",
    
  ];

  const degrees = ["Engineering", "Medical", "Arts", "Science", "Law", "Business"];
  const specializations = ["Computer Science", "Marketing", "Finance", "Civil", "Design"];
  const assets = ["Bike", "License", "Camera", "Laptop", "Smartphone"];
  const languages = ["English", "Hindi", "Urdu", "French", "Spanish", "German"];
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [maxBonus, setMaxBonus] = useState('');
const [bonusType, setBonusType] = useState('');

const [selectedJobType, setSelectedJobType] = useState('');
const [selectedWorkplaceType, setSelectedWorkplaceType] = useState('');
  const validatePhoneNumber = (text) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(text)) {
      setPhoneError('Invalid Phone Number');
    } else {
      setPhoneError('');
    }
    setPhoneNumber(text);
  };

  const toggleDropdown = () => setExpanded(!expanded);

  const addSection = (section) => {
    setSections((prev) => [...prev, section]);
    setExpanded(false);
  };

  const removeSection = (section) => {
    setSections((prev) => prev.filter((item) => item !== section));
  };

  const toggleAsset = (asset) => {
    setSelectedAssets((prev) =>
      prev.includes(asset) ? prev.filter((a) => a !== asset) : [...prev, asset]
    );
  };

  const toggleLanguage = (language) => {
    setSelectedLanguages((prev) =>
      prev.includes(language) ? prev.filter((l) => l !== language) : [...prev, language]
    );
  };

  const handleDegreeSelection = (degree) => {
    setSelectedDegree(degree);
    setDegreeModalVisible(false);
  };

  return (
    <ScrollView style={style.container}>
      {/* Header */}
      <View style={style.topHeader}>
        <Text style={style.headingText}>Post your Job in Two Minutes</Text>
        <View style={style.textWithBullet}>
          <Text style={style.bullet}>•</Text>
          <Text style={style.textStyle}>
            Get unlimited calls directly from the candidates.
          </Text>
        </View>
        <View style={style.textWithBullet}>
          <Text style={style.bullet}>•</Text>
          <Text style={style.textStyle}>
            Get access to the database of over 3.5 Crore candidates.
          </Text>
        </View>
      </View>

      {/* Basic Job Details */}
      <View>
        <Text style={[style.sectionTitle,{margin:10}]}>Basic Job Details</Text>
        <View style={style.inputHeader}>
          <Text style={style.label}>Job Title*</Text>
          <TextInput placeholder="Enter your job title" style={style.textInput} />

          <Text style={style.label}>Job Location*</Text>
          <View style={style.pickerContainer}>
            <Picker
              selectedValue={selectedLocation}
              onValueChange={(itemValue) => setSelectedLocation(itemValue)}
              style={style.pickerStyle}
            >
              <Picker.Item label="Select a location" value="" />
              <Picker.Item label="New Delhi" value="new_delhi" />
              <Picker.Item label="Mumbai" value="mumbai" />
              <Picker.Item label="Bangalore" value="bangalore" />
              <Picker.Item label="Chennai" value="chennai" />
              <Picker.Item label="Kolkata" value="kolkata" />
            </Picker>
          </View>
          <Text style={style.label}>Job Type*</Text>
    <View style={style.pickerContainer}>
      <Picker
        selectedValue={selectedJobType}
        onValueChange={(itemValue) => setSelectedJobType(itemValue)}
        style={style.pickerStyle}
      >
        <Picker.Item label="Select job type" value="" />
        <Picker.Item label="Part-time" value="part_time" />
        <Picker.Item label="Full-time" value="full_time" />
        <Picker.Item label="Internship" value="internship" />
        <Picker.Item label="Contract" value="contract" />
      </Picker>
    </View>
          <Text style={style.label}>Workplace Type*</Text>
         <View style={style.pickerContainer}>
      <Picker
        selectedValue={selectedWorkplaceType}
        onValueChange={(itemValue) => setSelectedWorkplaceType(itemValue)}
        style={style.pickerStyle}
      >
        <Picker.Item label="Select workplace type" value="" />
        <Picker.Item label="Hybrid" value="hybrid" />
        <Picker.Item label="Remote" value="remote" />
        <Picker.Item label="On-site" value="on_site" />
      </Picker>
    </View>
  
        </View>
      </View>

      {/* Candidate Requirement */}
      <View>
        <Text style={[style.sectionTitle,{margin:10}]}>Candidate Requirement</Text>

        {/* Total Years of Experience */}
        <View style={style.inputHeader}>
          <Text style={style.label}>Total Years of Experience*</Text>
          <View style={style.experienceButtonsContainer}>
            <TouchableOpacity
              style={[style.experienceButton, experienceType === 'Any' && style.activeButton]}
              onPress={() => setExperienceType('Any')}
            >
              <Text style={style.buttonText}>Any</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.experienceButton, experienceType === 'Fresher' && style.activeButton]}
              onPress={() => setExperienceType('Fresher')}
            >
              <Text style={style.buttonText}>Fresher only</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.experienceButton, experienceType === 'Experienced' && style.activeButton]}
              onPress={() => setExperienceType('Experienced')}
            >
              <Text style={style.buttonText}>Experienced only</Text>
            </TouchableOpacity>
          </View>

          {/* Show Min/Max Inputs if "Experienced" is selected */}
          {experienceType === 'Experienced' && (
            <View style={style.experienceInputContainer}>
              <TextInput
                placeholder="Min"
                value={minExperience}
                onChangeText={setMinExperience}
                keyboardType="numeric"
                style={style.experienceInput}
              />
              <Text style={style.toText}>to</Text>
              <TextInput
                placeholder="Max"
                value={maxExperience}
                onChangeText={setMaxExperience}
                keyboardType="numeric"
                style={style.experienceInput}
              />
            </View>
          )}
        {experienceType === 'Fresher' && (
    <Text style={style.fresherMessage}>No experience required for freshers.</Text>
  )}
          {/* Monthly Salary */}
          <Text style={style.sectionTitle}>Monthly in-hand salary</Text>

          <View style={style.salaryInputContainer}>
            <TextInput
              placeholder="Eg. 10000"
              value={minSalary}
              onChangeText={setMinSalary}
              keyboardType="numeric"
              style={style.salaryInput}
            />
            <Text style={style.toText}>to</Text>
            <TextInput
              placeholder="Eg. 15000"
              value={maxSalary}
              onChangeText={setMaxSalary}
              keyboardType="numeric"
              style={style.salaryInput}
            />
          </View>

          {/* <Text style={style.label}>Do you offer bonus in addition to monthly salary?</Text>
    <View style={style.radioButtonContainer}>
      <TouchableOpacity
        style={[style.radioButton, bonus && style.activeRadioButton]}
        onPress={() => setBonus(true)}
      >
        <View style={style.radioCircle}>
          {bonus && <View style={style.selectedCircle} />}
        </View>
        <Text style={style.radioText}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[style.radioButton, !bonus && style.activeRadioButton]}
        onPress={() => setBonus(false)}
      >
        <View style={style.radioCircle}>
          {!bonus && <View style={style.selectedCircle} />}
        </View>
        <Text style={style.radioText}>No</Text>
      </TouchableOpacity>
    </View> */}

    {/* Show Bonus Amount and Type if "Yes" is selected */}
    {/* {bonus && (
      <View>
        <Text style={style.label}>Maximum Bonus Amount*</Text>
        <TextInput
          placeholder="Eg. 5000"
          value={maxBonus}
          onChangeText={setMaxBonus}
          keyboardType="numeric"
          style={style.salaryInput}
        />

        <Text style={style.label}>Bonus Type*</Text>
        <TextInput
          placeholder="Eg. Performance-based, Fixed"
          value={bonusType}
          onChangeText={setBonusType}
          style={style.textInput}
        />
      </View>
    )} */}


        {/* Job Info */}
        <Text style={style.sectionTitle}>Job Info / Job Description*</Text>
        <TextInput
          placeholder="Enter job description"
          value={jobDescription}
          onChangeText={setJobDescription}
          style={style.textInput}
        />

        {/* Skills */}
        <Text style={style.sectionTitle}>Required Skills*</Text>
        <TextInput
          placeholder="Enter required skills"
          value={skills}
          onChangeText={setSkills}
          style={style.textInput}
        />
      </View>
    </View>
    {/* <View style={style.container2}> */}
      {/* Dropdown Header */}
      {/* <TouchableOpacity style={style.dropdownHeader} onPress={toggleDropdown}>
        <Text style={{color:'green',fontWeight:'bold'}}>
          Personal details, Education, Additional Info
        </Text>
        <Text style={style.expandText}>{expanded ? "▲" : "▼"}</Text>
      </TouchableOpacity> */}

      {/* Dropdown Content */}
      {/* {expanded && (
        <View style={style.dropdownContent}>
          {sectionTypes.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={style.dropdownItem}
              onPress={() => addSection(item)}
            >
              <Text style={style.dropdownItemText}>{item} +</Text>
            </TouchableOpacity>
          ))}
        </View>
      )} */}

      {/* Render Sections Dynamically */}
      {/* <FlatList
        data={sections}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          if (item === "Degree and Specialisation") {
            return (
              <View style={style.sectionContainer}>
                <View style={style.sectionHeader}>
                  <Text style={style.sectionTitle}>Degree and Specialisation</Text>
                  <TouchableOpacity onPress={() => removeSection(item)}>
                    <Text style={style.closeButton}>❌</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={style.dropdownButton}
                  onPress={() => setDegreeModalVisible(true)}
                >
                  <Text>
                    {selectedDegree || "Select Degree and Specialisation"}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          } */}

        
    <Text style={{margin:10,fontWeight:'bold'}}>
        Timings*
    </Text>
    <View style={[style.topHeader, { backgroundColor: 'white' }]}>
  {/* Your content here */}

    <Text style={style.sectionTitle}>Job Timings*</Text>
<TextInput
  placeholder="Enter job timings (e.g., 9 AM - 6 PM)"
  value={jobDescription} // You can reuse this state or create a new one like jobTimings
  onChangeText={setJobDescription}
  style={style.textInput}
/>
       
    </View>
    <Text style={style.heading}>
        About Your Company
    </Text>
    <ScrollView contentContainerStyle={style.container1}>
      
      
      <View style={style.inputGroup}>
        <Text style={style.label}>Company Name *</Text>
        <TextInput
          style={style.input}
          placeholder="Eg. Eloquent info Solutions"
        />
      </View>
      <View style={style.inputGroup}>
        <Text style={style.label}>Company address</Text>
        <TextInput
          style={style.input}
          
        />
      </View>

      {/* <View style={style.inputGroup}>
        <Text style={style.label}>Contact Person Name *</Text>
        <TextInput
          style={style.input}
          placeholder="Eg. Nilesh"
        />
      </View> */}

      <View style={style.inputGroup}>
        <Text style={style.label}>Phone Number *</Text>
        <TextInput
          style={[style.input, phoneError ? style.errorBorder : null]}
          placeholder="+91"
          keyboardType="number-pad"
          value={phoneNumber}
          onChangeText={validatePhoneNumber}
        />
        {phoneError ? <Text style={style.errorText}>{phoneError}</Text> : null}
      </View>

      <View style={style.inputGroup}>
        <Text style={style.label}>Email Id *</Text>
        <TextInput
          style={style.input}
          placeholder="Eg. eloquent@gmail.com"
          keyboardType="email-address"
        />
      </View>

      {/* <View style={style.inputGroup}>
        <Text style={style.label}>Contact Person Profile *</Text>
        <Picker style={[style.picker,{borderWidth:1,borderColor:'black'}]}>
          <Picker.Item label="HR/Owner" value="hr" />
          <Picker.Item label="Manager" value="manager" />
        </Picker>
      </View> */}

      {/* <View style={style.inputGroup}>
        <Text style={style.label}>Size of Organization *</Text>
        <Picker style={style.picker}>
          <Picker.Item label="Select number of employees" value="" />
          <Picker.Item label="1-10" value="1-10" />
          <Picker.Item label="11-50" value="11-50" />
          <Picker.Item label="51-200" value="51-200" />
        </Picker>
      </View> */}

      {/* <View style={style.inputGroup}>
        <Text style={style.label}>Job Address *</Text>
        <TextInput
          style={[style.input, { height: 80 }]}
          placeholder="Address ONLY shown to registered candidates"
          multiline
        />
      </View> */}

      {/* <View style={style.inputGroup}>
        <Text style={style.label}>How often do you have a new job vacancy?</Text>
        <Picker style={style.picker}>
          <Picker.Item label="Choose hiring frequency" value="" />
          <Picker.Item label="Weekly" value="weekly" />
          <Picker.Item label="Monthly" value="monthly" />
          <Picker.Item label="Rarely" value="rarely" />
        </Picker>
      </View> */}

      
    </ScrollView>
    <TouchableOpacity style={style.button1} onPress={() => alert('Form Submitted!')}>
      <Text style={style.buttonText1}>Submit</Text>
    </TouchableOpacity>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  // ...styles here (same as before)
  button1: {
    width: '30%',
    backgroundColor: '#10A881',// Green color
    padding: 10,
    borderRadius: 5,
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
    margin:10, // Add spacing from the top
    alignSelf: 'center', // Center the button on the screen
  },
  buttonText1: {
    color: '#fff', // White text
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#D9F6DD',
  },
  topHeader: {
    width: '90%',
    margin:10,
    marginTop: 30,
    padding: 10,
    backgroundColor: '#10A881',
    borderRadius: 10,
  },
  headingText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  textWithBullet: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  bullet: {
    color: 'white',
    fontSize: 18,
    marginRight: 5,
  },
  textStyle: {
    color: 'white',
    flex: 1,
    fontSize: 15,
  },
  sectionTitle: {
    marginBottom:2,
    margin: 10,
    fontSize: 15,
  },
  inputHeader: {
    width: '90%',
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 8,
  },
  label: {
    margin: 6,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginVertical: 2,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  pickerStyle: {
    height: 50,
  },
  experienceButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  experienceButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#F5F5F5',
  },
  activeButton: {
    backgroundColor: '#10A881',
  },
  buttonText: {
    color: 'black',
  },
  experienceInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  experienceInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '40%',
    padding: 8,
  },
  toText: {
    marginHorizontal: 5,
  },
  salaryInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  salaryInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '40%',
    padding: 8,
    marginLeft:8
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#10A881',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#10A881',
  },
  radioText: {
    fontSize: 16,
  },
  fresherMessage: {
    marginTop: 7,
    padding: 10,
    backgroundColor: '#10A881', // Green background
    color: 'white',             // White text
    borderRadius: 5,
    fontSize: 13,
    
  }
  ,headingText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  container2: { flex: 1, padding: 10, backgroundColor: "white" ,width:'90%',
    margin:10,borderRadius:10
  },
  dropdownHeader: { flexDirection: "row", justifyContent: "space-between", padding: 10, backgroundColor: "white", borderRadius: 10},
  headingText: { color: "white", fontSize: 16 },
  expandText: { color: "green", fontSize: 16 },
  dropdownContent: { backgroundColor: "white", padding: 10, borderRadius: 5 },
  dropdownItem: { padding: 10 },
  dropdownItemText: { fontSize: 14 },
  sectionContainer: { backgroundColor: "white", padding: 10, marginVertical: 5, borderRadius: 5 },
  sectionHeader: { flexDirection: "row", justifyContent: "space-between" },
  sectionTitle: { fontSize: 14, fontWeight: "bold", marginBottom: 5 },
  closeButton: { fontSize: 10, color: "red" },
  rowContainer: { flexDirection: "row", flexWrap: "wrap" },
  assetOption: { padding: 10, margin: 5, borderWidth: 1, borderRadius: 5, width: "37%", alignItems: "center" },
  assetSelected: { backgroundColor: "#10A881", color: "white" },
  dropdownButton: { padding: 10, borderWidth: 1, borderRadius: 5, backgroundColor: "#f0f0f0" },
  modalContainer: { flex: 1, padding: 20, backgroundColor: "white" },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  modalItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  container1: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    width:'90%',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 8,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    margin:10
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  errorBorder: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  picker: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
});
// const styles=StyleSheet.craeate({
//     container: { flex: 1, padding: 10, backgroundColor: "#D9F6DD" },
//   dropdownHeader: { flexDirection: "row", justifyContent: "space-between", padding: 10, backgroundColor: "#10A881", borderRadius: 5 },
//   headingText: { color: "white", fontSize: 16 },
//   expandText: { color: "white", fontSize: 16 },
//   dropdownContent: { backgroundColor: "white", padding: 10, borderRadius: 5 },
//   dropdownItem: { padding: 10 },
//   dropdownItemText: { fontSize: 14 },
//   sectionContainer: { backgroundColor: "white", padding: 10, marginVertical: 5, borderRadius: 5 },
//   sectionTitle: { fontSize: 14, fontWeight: "bold", marginBottom: 5 },
//   textInput: { borderWidth: 1, borderRadius: 5, padding: 8, marginVertical: 5 },
//   ageContainer: { flexDirection: "row", justifyContent: "space-between" },
//   assetOption: { padding: 10, marginVertical: 5, borderWidth: 1, borderRadius: 5 },
//   assetSelected: { backgroundColor: "#10A881", color: "white" },
//   dropdownButton: { padding: 10, borderWidth: 1, borderRadius: 5, backgroundColor: "#f0f0f0" },
//   modalContainer: { flex: 1, padding: 20, backgroundColor: "white" },
//   modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
//   modalItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" },
//   closeButton: { marginTop: 20, padding: 10, backgroundColor: "#10A881", borderRadius: 5, alignItems: "center" },
//   closeButtonText: { color: "white", fontWeight: "bold" },
// })
export default PostJob;
