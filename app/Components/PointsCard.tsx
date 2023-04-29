import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import currencyFormat from '../helpers/currencyFormat';

const PointsCard = ({totalPoints}) => {
  const currentMonth = () => {
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Augosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    const date = new Date();
    let month = months[date.getMonth()];
    return month;
  };

  return (
    <View style={styles.content}>
      <View style={styles.pointsWrapper}>
        <Text style={styles.profileWelcomeTitle}>Tus puntos</Text>
        <View style={styles.card}>
          <View>
            <Text style={styles.monthText}>{currentMonth()}</Text>
            <Text style={styles.mountText}>
              {currencyFormat(totalPoints)} pts
            </Text>
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
    marginTop: 20,
  },
  pointsWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileWelcomeTitle: {
    fontWeight: '700',
    color: '#9B9898',
    fontSize: 16,
    width: '100%',
    textAlign: 'left',
    marginBottom: 20,
  },
  monthText: {
    width: '100%',
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    textAlign: 'left',
    marginBottom: 7,
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
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00000080',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
    shadowRadius: 3,
  },
});

export default PointsCard;
