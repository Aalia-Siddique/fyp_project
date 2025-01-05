import React, { useState } from 'react'; 
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Alert
} from "react-native";
import { Picker } from '@react-native-picker/picker';

const PostService = () => {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [homeAddress, setHomeAddress] = useState('');
    const [preferredDate, setPreferredDate] = useState('');
    const [preferredTime, setPreferredTime] = useState('');
    const [urgencyLevel, setUrgencyLevel] = useState('Normal');
    const [estimatedBudget, setEstimatedBudget] = useState('');
    const [experience, setExperience] = useState('');
    const [email, setEmail] = useState(''); // Added email state

    const handleSubmit = async () => {
        console.log('Submit button clicked'); // Ensure the function is triggered
        let formattedPreferredDate = '';
    if (preferredDate) {
        const dateObject = new Date(preferredDate); // Convert to Date object
        if (!isNaN(dateObject.getTime())) {
            formattedPreferredDate = dateObject.toISOString(); // Convert to ISO string
        } else {
            console.log("Invalid preferred date");
            Alert.alert("Validation Error", "Please provide a valid preferred date.");
            return;
        }
    }
    const phoneRegex = /^\+92[3][0-9]{9}$/;
if (!phoneRegex.test(phoneNumber)) {
    Alert.alert("Validation Error", "Please enter a valid Pakistani phone number starting with +92 followed by 10 digits (e.g., +923001234567).");
    return;
}


    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Alert.alert("Validation Error", "Please enter a valid email address.");
        return;
    }
    const validUrgencyLevels = ['Normal', 'Emergency'];
    if (!validUrgencyLevels.includes(urgencyLevel)) {
        Alert.alert("Validation Error", "Please select a valid urgency level.");
        return;
    }

    // Map the selected urgency level to the backend's expected enum
    const urgencyEnum = urgencyLevel === 'Normal' ? 0 : 1;
    
        // Form data to be sent to backend
        const formData = {
            Name: jobDescription, // Assuming this is the service name
            Location: selectedLocation,
            Address: homeAddress,
            PhoneNumber: phoneNumber,
            Email: email,
            Experience: experience ,// Convert experience to integer
            PreferredDate: preferredDate,
            Timing: preferredTime,
            UrgencyLevel: urgencyEnum,
            Salary: parseFloat(estimatedBudget), // Convert estimated budget to decimal
        };
        
    
        // Check if mandatory fields are filled
        if (!selectedLocation || !homeAddress || !phoneNumber || !email || !jobDescription || !preferredDate || !preferredTime || !urgencyLevel || !estimatedBudget || !experience) {
            console.log("Field is missing");
            Alert.alert("Validation Error", "Please fill all the mandatory fields.");
            return;
        }
    
        try {
            console.log("Sending request..."); // Log to check if it's reaching here
            const response = await fetch('http://192.168.100.22:5229/api/ServicePost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            // Log the response status
            console.log('Response Status:', response.status);
            if (response.ok) {
        Alert.alert("Success", "Service posted successfully!");
    } else {
        const errorResponse = await response.json(); // Get the response body
        console.error("Error details:", errorResponse);
        Alert.alert("Error", "Failed to post the service. Try again.");
    }
        } catch (error) {
            console.error("Submit Error:", error); // Log the error to see what went wrong
            Alert.alert("Error", "An error occurred while submitting the form.");
        }
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.topHeader}>
                <Text style={styles.headingText}>Post your Service in Two Minutes</Text>
                <View style={styles.textWithBullet}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.textStyle}>
                        Get unlimited calls directly from the candidates.
                    </Text>
                </View>
                <View style={styles.textWithBullet}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.textStyle}>
                        Get access to the database of over 3.5 Crore candidates.
                    </Text>
                </View>
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Service Name*</Text>
                <TextInput
                    placeholder="Enter service name"
                    style={styles.textInput}

                />

                <Text style={styles.label}>Service Location*</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={selectedLocation}
                        onValueChange={(itemValue) => setSelectedLocation(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select a location" value="" />
                        <Picker.Item label="New Delhi" value="new_delhi" />
                        <Picker.Item label="Mumbai" value="mumbai" />
                        <Picker.Item label="Bangalore" value="bangalore" />
                        <Picker.Item label="Chennai" value="chennai" />
                        <Picker.Item label="Kolkata" value="kolkata" />
                    </Picker>
                </View>

                <Text style={styles.label}>Home Address*</Text>
                <TextInput
                    placeholder="Enter home address"
                    value={homeAddress}
                    onChangeText={setHomeAddress}
                    style={styles.textInput}
                />

                <Text style={styles.label}>Preferred Date*</Text>
                <TextInput
                    placeholder="YYYY-MM-DD"
                    value={preferredDate}
                    onChangeText={setPreferredDate}
                    style={styles.textInput}
                />

                <Text style={styles.label}>Preferred Time*</Text>
                <TextInput
                    placeholder="HH:MM"
                    value={preferredTime}
                    onChangeText={setPreferredTime}
                    style={styles.textInput}
                />

                <Text style={styles.label}>Estimated Budget*</Text>
                <TextInput
                    placeholder="Enter estimated budget"
                    value={estimatedBudget}
                    onChangeText={setEstimatedBudget}
                    keyboardType="numeric"
                    style={styles.textInput}
                />

                <Text style={styles.label}>Urgency Level*</Text>
                 {/* <TextInput
                    placeholder="Enter service description"
                    value={urgencyLevel}
                    onChangeText={setJobDescription}
                    style={styles.textInput}
                /> */}

                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={urgencyLevel}
                        onValueChange={(itemValue) => setUrgencyLevel(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select urgency level" value="" />
                        <Picker.Item label="Emergency" value="Emergency" />
                        <Picker.Item label="Normal" value="Normal" />
                    </Picker>
                </View>

                <Text style={styles.label}>Service Description*</Text>
                <TextInput
                    placeholder="Enter service description"
                    value={jobDescription}
                    onChangeText={setJobDescription}
                    style={styles.textInput}
                />

                <Text style={styles.label}>Experience (in years)*</Text>
                <TextInput
                    placeholder="Enter experience"
                    value={experience}
                    onChangeText={setExperience}
                    keyboardType="numeric"
                    style={styles.textInput}
                />

                <Text style={styles.label}>Phone Number*</Text>
                <TextInput
                    placeholder="+92"
                    keyboardType="number-pad"
                    value={phoneNumber} // Directly binding to the phone number state
                    onChangeText={setPhoneNumber} // Updating state directly
                    style={styles.textInput}
                />

                <Text style={styles.label}>Email Id*</Text>
                <TextInput
                    placeholder="e.g., example@gmail.com"
                    keyboardType="email-address"
                    value={email} // Binding email state
                    onChangeText={setEmail} // Updating email state
                    style={styles.textInput}
                />
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:'#D9F6DD',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputGroup: {
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 15,
    },
    picker: {
        height: 50,
    },
    submitButton: {
        backgroundColor: '#10A881',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
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
});

export default PostService;
