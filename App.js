import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './src/screens/LandingPage'; // Adjust the path as needed
import LoginPage from './src/Authentication/LoginPage';// Adjust the path as needed
import SignUpPage from './src/Authentication/SignUpPage';
import Home from './src/screens/Home';
import Tab from './src/navigation/Tab';
import Filter1 from './src/screens/Filter1';
import PostJob from './src/screens/PostJob';
import PostService from './src/screens/PostService';
const Stack = createStackNavigator();
const App = () => {
  return (


    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="LandingPage" 
          component={LandingPage} 
          options={{ headerShown: false }} // Hides the header for the landing page
        />
        <Stack.Screen
          name="Tab"
          component={Tab}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="PostJob"
          component={PostJob}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PostService"
          component={PostService}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Filter1"
          component={Filter1}
          options={{ headerShown: true }}
        />
  
         {/* <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> */}
        <Stack.Screen 
          name="LoginPage" 
          component={LoginPage} 
          options={{ headerShown: false }} // Header title for the login page
        />
        <Stack.Screen 
          name="SignUpPage" 
          component={SignUpPage} 
          options={{ headerShown: false }} // Hides the header for the landing page
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



