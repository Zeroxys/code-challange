import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
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
        <Image style={styles.productImage} source={{uri: image}} />
      </View>
      <View style={styles.productInfoContent}>
        <Text style={styles.profileWelcomeTitle}>Detalles del producto:</Text>
        <Text style={styles.buyDate}>Comprado el {formatDate(createdAt)}</Text>
        <Text style={styles.profileWelcomeTitle}>
          Con esta compra acumulaste:
        </Text>
        <Text style={styles.points}>{points} puntos</Text>
      </View>
      <View style={styles.button}>
        <Button width={'100%'} onPress={navigateTo} />
      </View>
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
  productInfoContent: {
    height: 300,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: 24,
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  profileWelcomeTitle: {
    fontWeight: '700',
    color: '#9B9898',
    marginTop: 32,
  },
  buyDate: {
    fontWeight: '700',
    fontSize: 16,
    marginTop: 19,
  },
  points: {
    fontWeight: '700',
    fontSize: 24,
    marginTop: 32,
  },
  button: {marginBottom: 40},
});

export default ProductScreen;
