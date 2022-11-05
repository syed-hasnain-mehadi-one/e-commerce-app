import React from 'react';
import {Image, ScrollView, StyleSheet, Text} from 'react-native';
import {COLORS} from '../../constants/Theme';
const Card = ({item}) => {
  return (
    <ScrollView style={styles.card}>
      <Image source={{uri: item?.image}} style={styles.image} />
      <Text style={styles.title}>{item?.title}</Text>
      <Text>
        <Text>Price </Text>
        <Text style={styles.title}>{item?.price}</Text>
      </Text>
    </ScrollView>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: '96%',
    backgroundColor: '#ffffff',
    height: 300,
    borderWidth: 1,
    margin: 5,
    padding: 10,
    borderRadius: 20,
    elevation: 1,
    borderColor: '#f5f7f6',
  },
  title: {
    color: COLORS.lightBlack,
    fontSize: 18,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    resizeMode: 'contain',
  },
});
