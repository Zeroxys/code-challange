import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({text = 'Aceptar', onPress, width}) => {
  return (
    <TouchableOpacity onPress={e => onPress(e)}>
      <View style={{...styles.content, width}}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    height: 50,
    width: 353,
    borderRadius: 10,
    backgroundColor: '#334FFA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
});

export default Button;
