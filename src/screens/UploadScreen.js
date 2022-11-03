import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UploadScreen = () => {
  return (
    <View style={styles.conatiner}>
      <Text>UploadScreen</Text>
    </View>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
