import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProductScreen = ({route}) => {
  console.warn(route.params);
  return (
    <View style={styles.content}>
      <Text>JEJE</Text>
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
});

export default ProductScreen;
