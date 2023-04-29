import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import formatDate from '../helpers/dateFormat';

const Product = ({image, product, createdAt, points, is_redemption}) => {
  const redemptionColor = is_redemption ? '#00B833' : '#FF0000';
  return (
    <View style={styles.productItem}>
      <Image style={styles.tinyLogo} source={{uri: image}} />
      <View style={styles.descriptionContent}>
        <Text style={styles.productName}>{product}</Text>
        <Text style={styles.productDate}>{formatDate(createdAt)} </Text>
      </View>
      <View style={styles.pointsContainer}>
        <Text style={{color: redemptionColor}}>
          {is_redemption ? '+' : '-'}
        </Text>
        <Text style={styles.points}>{points}</Text>
      </View>
      <Text style={styles.arrow}>{'>'}</Text>
    </View>
  );
};
const MovementsList = ({movements, navigation}) => {
  const flatListRef = useRef(null);
  const navigateTo = item => {
    navigation.navigate('Product', item);
  };

  useEffect(() => {
    toTop();
  }, [movements]);

  const toTop = () => {
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };

  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.profileWelcomeTitle}>Tus Movimientos</Text>
        <View style={styles.scrollContent}>
          <FlatList
            ref={flatListRef}
            data={movements}
            renderItem={movement => {
              return (
                <TouchableOpacity onPress={() => navigateTo(movement.item)}>
                  <Product {...movement.item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={movement => movement.id}
          />
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
    marginTop: 20,
  },
  scrollContent: {
    height: 350,
  },
  profileWelcomeTitle: {
    fontWeight: '700',
    color: '#9B9898',
    fontSize: 16,
    marginBottom: 20,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  tinyLogo: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  descriptionContent: {
    marginLeft: 16,
    justifyContent: 'space-around',
  },
  productName: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 19,
    marginBottom: 7,
  },
  productDate: {
    fontWeight: '400',
    fontSize: 12,
  },
  pointsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  points: {
    fontSize: 16,
    fontWeight: '700',
  },
  arrow: {
    marginLeft: 10,
    fontWeight: '700',
  },
});

export default MovementsList;
