import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PointsCard = () => {
  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.profileWelcomeTitle}>Tus puntos</Text>
        <Text style={styles.profileWelcomeTitle}>Card</Text>
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
  profileWelcomeTitle: {
    fontWeight: '900',
  },
});

export default PointsCard;
