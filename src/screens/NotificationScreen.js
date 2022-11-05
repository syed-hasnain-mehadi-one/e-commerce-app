import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const NotificationScreen = () => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.text}>NotificationScreen</Text>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
