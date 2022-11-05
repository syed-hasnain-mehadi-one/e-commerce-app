/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import Card from '../components/home/Card';

const HomeScreen = () => {
  const [data, setData] = useState();
  const [loader, setLoader] = useState(false);
  const getImg = async () => {
    try {
      setLoader(true);
      const res = await fetch('https://fakestoreapi.com/products');
      const result = await res.json();
      console.log('result', result[0]);
      setLoader(false);
      setData(result);
    } catch (error) {
      setLoader(false);
    }
  };
  useEffect(() => {
    getImg();
  }, []);
  return (
    <View style={styles.conatiner}>
      {loader && <ActivityIndicator size="large" color="#00ff00" />}
      <FlatList data={data} renderItem={Card} keyExtractor={item => item.id} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  conatiner: {
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
