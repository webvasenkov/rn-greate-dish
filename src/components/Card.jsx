import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SHADOW } from '../constants/constants';

const Card = ({ children, style, ...restProps }) => {
  return (
    <View style={[styles.card, style]} {...restProps}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    ...SHADOW.full,
  },
});
