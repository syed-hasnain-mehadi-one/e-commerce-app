import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.conatiner}>
      <Text>AboutScreen</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
