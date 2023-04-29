import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import formatDate from '../helpers/dateFormat';
import Button from '../Components/Button';

const ProductScreen = ({navigation, route: {params}}) => {
  const {image, product, createdAt, points, is_redemption} = params;

  const navigateTo = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.content}>
      <View>
        <Text style={styles.productTitle}>{product}</Text>
      </View>
      <View style={styles.productContent}>
        <View></View>
        <Image style={styles.productImage} source={{uri: image}} />
      </View>
      <View>
        <Text style={styles.profileWelcomeTitle}>Detalles del producto</Text>
        <Text>Comprado el {formatDate(createdAt)}</Text>
        <Text style={styles.profileWelcomeTitle}>
          Con esta compra acumulaste:
        </Text>
        <Text>{points} puntos</Text>
      </View>
      <Button onPress={navigateTo} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#CFD6FF',
    padding: 20,
  },
  productContent: {
    backgroundColor: 'white',
    height: 353,
    width: 350,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#00000080',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
    shadowRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  profileWelcomeTitle: {
    fontWeight: '900',
    color: '#9B9898',
  },
});

export default ProductScreen;
