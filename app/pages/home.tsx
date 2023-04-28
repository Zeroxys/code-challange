import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import PointsCard from '../Components/PointsCard';
import MovementsList from '../Components/MovementsList';
import apiFetch from '../helpers/apiFetch';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const res = await apiFetch('/products');
    setData(res);
  };

  useEffect(() => {
    getProducts();
  });

  return (
    <View style={styles.content}>
      <View style={styles.mainContent}>
        <View style={styles.profileCard}>
          <Text style={styles.profileWelcomeTitle}>Bienvenido de vuelta!</Text>
          <Text style={styles.profileName}>Miguel Zavala</Text>
        </View>
        <PointsCard />
        <MovementsList navigation={navigation} movements={data} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    margin: 10,
  },
  mainContent: {
    borderWidth: 1,
    borderColor: 'red',
    height: '100%',
    width: '100%',
  },
  profileCard: {
    borderWidth: 1,
  },
  profileWelcomeTitle: {
    fontWeight: '900',
  },
  profileName: {
    fontWeight: '400',
  },
});

export default HomeScreen;
