import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PointsCard = () => {
  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.profileWelcomeTitle}>Tus puntos</Text>
        <View style={styles.card}>
          <View style={styles.textContent}>
            <Text style={styles.monthText}>Diciembre</Text>
            <Text style={styles.mountText}>10,000</Text>
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
    margin: 20,
  },
  textContent: {
    height: '50%',
    padding: 20,
    justifyContent: 'space-between',
  },
  profileWelcomeTitle: {
    fontWeight: '900',
  },
  monthText: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
    color: 'white',
  },
  mountText: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
  },
  card: {
    height: 143,
    width: 286,
    borderRadius: 20,
    backgroundColor: '#334FFA',
    shadowColor: '#00000080',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
    shadowRadius: 3,
  },
});

export default PointsCard;
