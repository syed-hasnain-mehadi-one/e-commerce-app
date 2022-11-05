import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet} from 'react-native';

//icons
import bellIcon from '../assets/icons/bell.png';
import cartIcon from '../assets/icons/cart.png';
import homeIcon from '../assets/icons/home.png';
import uploadIcon from '../assets/icons/upload.png';
import aboutIcon from '../assets/icons/user.png';

//screens
import AboutScreen from '../screens/AboutScreen';
import Cart from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';
import Notification from '../screens/NotificationScreen';
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
          component={Cart}
          options={{
            title: 'About',
            tabBarIcon: () => {
              return <Image style={styles.image} source={cartIcon} />;
            },
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            title: 'Notification',
            tabBarIcon: () => {
              return <Image style={styles.image} source={bellIcon} />;
            },
          }}
        />

        <Tab.Screen
          name="Cart"
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
    height: 18,
    width: 18,
  },
});
