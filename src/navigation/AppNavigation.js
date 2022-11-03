import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import aboutIcon from '../assets/icons/about.png';
import homeIcon from '../assets/icons/home.png';
import uploadIcon from '../assets/icons/upload.png';

import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen';
import UploadScreen from '../screens/UploadScreen';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: () => {
              return <Image style={styles.image} source={homeIcon} />;
            },
          }}
        />
        <Tab.Screen
          name="Upload"
          component={UploadScreen}
          options={{
            title: 'Home',
            tabBarIcon: () => {
              return <Image style={styles.image} source={uploadIcon} />;
            },
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: 'About',
            tabBarIcon: () => {
              return <Image style={styles.image} source={aboutIcon} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
  image: {
    height: 15,
    width: 15,
  },
});
