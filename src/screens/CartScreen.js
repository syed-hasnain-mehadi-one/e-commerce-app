import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/Theme';

const CartScreen = () => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.text}>CartScreen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: COLORS.gray,
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
