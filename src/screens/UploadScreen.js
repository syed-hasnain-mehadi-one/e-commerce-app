import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/Theme';

const UploadScreen = () => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.text}>UploadScreen</Text>
    </View>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: COLORS.lightGary,
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
