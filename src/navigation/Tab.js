import { Image, StyleSheet, Text, View, Button, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Home from '../screens/Home';
import AllJobs from '../screens/AllJobs';
import MyJobs from '../screens/MyJobs';
import Me from '../screens/Me';
import PostJob from '../screens/PostJob';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
const Tabs = createBottomTabNavigator();

const Tab = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation(); // Access the navigation prop

  const handlePostJobTabPress = () => {
    setModalVisible(true); // Show modal when "Post a Job" tab is pressed
  };

  const handlePostJob = () => {
    setModalVisible(false); // Close the modal
    navigation.navigate('PostJob'); // Navigate to the PostJob screen
  };

  const handlePostService = () => {
    setModalVisible(false); // Close the modal
    // Add navigation logic for posting a service if needed
    navigation.navigate('PostService'); // Navigate to the PostService screen (create it if not yet created)
  };


  return (
    <>
      <Tabs.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#ffffff',
            height: 50,
          },
        }}
      >
        {/* Home Tab */}
        <Tabs.Screen
          name="Homes"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require('../../assests/icons/home.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 30,
                    tintColor: focused ? '#6ab04c' : '#616C6F',
                  }}
                />
                <Text style={{
                  textAlign: 'center',
                  fontSize: 8,
                  color: focused ? '#6ab04c' : 'black',
                }}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        {/* AllJobs Tab */}
        <Tabs.Screen
          name="AllJobs"
          component={AllJobs}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require('../../assests/icons/suitcase.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 30,
                    tintColor: focused ? '#6ab04c' : '#616C6F',
                  }}
                />
                <Text style={{
                  textAlign: 'center',
                  fontSize: 8,
                  color: focused ? '#6ab04c' : 'black',
                }}>
                  AllJobs
                </Text>
              </View>
            ),
          }}
        />
        {/* PostJob Tab */}
        <Tabs.Screen
          name="PostJob"
          component={PostJob}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require('../../assests/icons/plus.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 30,
                    tintColor: focused ? '#6ab04c' : '#616C6F',
                  }}
                />
                <Text style={{
                  textAlign: 'center',
                  fontSize: 8,
                  color: focused ? '#6ab04c' : 'black',
                }}>
                  PostJob
                </Text>
              </View>
            ),
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={handlePostJobTabPress} // Show modal when clicked
              />
            ),
          }}
        />
        {/* MyJobs Tab */}
        <Tabs.Screen
          name="MyJobs"
          component={MyJobs}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require('../../assests/icons/Myjob.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 30,
                    tintColor: focused ? '#6ab04c' : '#616C6F',
                  }}
                />
                <Text style={{
                  textAlign: 'center',
                  fontSize: 8,
                  color: focused ? '#6ab04c' : 'black',
                }}>
                  MyJobs
                </Text>
              </View>
            ),
          }}
        />
        {/* Me Tab */}
        <Tabs.Screen
          name="Me"
          component={Me}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require('../../assests/icons/user.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 30,
                    tintColor: focused ? '#6ab04c' : '#616C6F',
                  }}
                />
                <Text style={{
                  textAlign: 'center',
                  fontSize: 8,
                  color: focused ? '#6ab04c' : 'black',
                }}>
                  Me
                </Text>
              </View>
            ),
          }}
        />
      </Tabs.Navigator>

      {/* Modal to show options */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>What do you want to do?</Text>
            <View style={styles.buttonsRow}>
              <TouchableOpacity style={styles.greenButton} onPress={handlePostJob}>
                <Text style={styles.buttonText}>Post a Job</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.greenButton} onPress={handlePostService}>
                <Text style={styles.buttonText}>Post a Service</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20, // Space between buttons and Cancel
  },
  greenButton: {
    backgroundColor: '#6ab04c', // Green background color
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 10, // Space between buttons
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#ff6347', // Red background color for cancel
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Tab;
