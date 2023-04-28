import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import PointsCard from '../Components/PointsCard';
import MovementsList from '../Components/MovementsList';

const HomeScreen = () => {
  return (
    <View style={styles.content}>
      <ScrollView style={styles.mainContent}>
        <View style={styles.profileCard}>
          <Text style={styles.profileWelcomeTitle}>Bienvenido de vuelta!</Text>
          <Text style={styles.profileName}>Miguel Zavala</Text>
        </View>
        <PointsCard />
        <MovementsList />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    margin: 20,
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
