import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import PointsCard from '../Components/PointsCard';
import MovementsList from '../Components/MovementsList';
import apiFetch from '../helpers/apiFetch';
import Button from '../Components/Button';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);

  const getTotalPoints = source => {
    let total = 0;
    for (product of source) {
      if (product.is_redemption) {
        total = total + product.points;
      } else {
        total = total - product.points;
      }
    }
    setTotalPoints(total);
  };

  const getProducts = async () => {
    const res = await apiFetch('/products');
    getTotalPoints(res);
    setData(res);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const sortForWinnerProducts = (sortForWinner: boolean) => {
    const arr = [...data];
    arr.sort(function (a, b) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    arr.sort(function (x, y) {
      if (sortForWinner) {
        // true values first
        return x.is_redemption === y.is_redemption
          ? 0
          : x.is_redemption
          ? -1
          : 1;
      } else {
        //false values first
        return x.is_redemption === y.is_redemption
          ? 0
          : x.is_redemption
          ? 1
          : -1;
      }
    });
    setData([...arr]);
  };

  const allFilter = () => {
    getProducts();
  };

  const onlyWinnerFilter = () => {
    console.warn('all');
    sortForWinnerProducts(true);
  };

  const redeemedFilter = () => {
    sortForWinnerProducts(false);
  };

  return (
    <View style={styles.content}>
      <View style={styles.mainContent}>
        <View style={styles.profileCard}>
          <Text style={styles.profileWelcomeTitle}>Bienvenido de vuelta!</Text>
          <Text style={styles.profileName}>Miguel Zavala</Text>
        </View>
        <PointsCard totalPoints={totalPoints} />
        <MovementsList navigation={navigation} movements={data} />
        <View style={styles.filtersContent}>
          <Button onPress={allFilter} text="Todos" width={'100%'} />
          <View style={styles.filtersSmalls}>
            <Button onPress={onlyWinnerFilter} text="Ganados" width={170} />
            <Button onPress={redeemedFilter} text="Canjeados" width={170} />
          </View>
        </View>
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
  filtersContent: {
    width: '100%',
  },
  filtersSmalls: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HomeScreen;
