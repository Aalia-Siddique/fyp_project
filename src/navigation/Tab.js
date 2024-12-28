import { Image, StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import AllJobs from '../screens/AllJobs';
import MyJobs from '../screens/MyJobs';
import Me from '../screens/Me';
import PostJobs from '../screens/PostJob';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

const Tab = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: 50,
        },

       
      }}
    >
      {/* Home Tab with Custom Header */}
      <Tabs.Screen
        name="Homes"
        component={Home}
        options={{ 
            headerShown: false, // Hides the header
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
                textAlign:'center',
                fontSize: 8,
                color: focused ? '#6ab04c' : 'black'}}>Home
                </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
      
        name="AllJobs"
        component={AllJobs}
        options={{
          headerShown: false, // Hides the header
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
                textAlign:'center',
                fontSize: 8,
                color: focused ? '#6ab04c' : 'black'}}>AllJobs
                </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
      
        name="PostJob"
        component={PostJobs}
        options={{
          headerShown: false, // Hides the header
            tabBarLabel: '',
          headerTitle: 'Post a Job',

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
                textAlign:'center',
                fontSize: 8,
                color: focused ? '#6ab04c' : 'black'}}>PostJob
                </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
      
        name="MyJobs"
        component={MyJobs}
        options={{
          headerShown: false, // Hides the header
            tabBarLabel: '',
          headerTitle: 'My Jobs',
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
                textAlign:'center',
                fontSize: 8,
                color: focused ? '#6ab04c' : 'black'}}>MyJobs
                </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Me"
        component={Me}
        options={{
          headerShown: false, // Hides the header
            tabBarLabel: '',
          headerTitle: 'Profile',
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
                textAlign:'center',
                fontSize: 8,
                color: focused ? '#6ab04c' : 'black'}}>Me
                </Text>
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
 
});

export default Tab;
