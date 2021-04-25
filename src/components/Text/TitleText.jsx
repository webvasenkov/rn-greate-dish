import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = ({ children, style, ...restProps }) => (
  <Text style={[styles.text, style]} {...restProps}>
    {children}
  </Text>
);

export default TitleText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'poppins-semi-bold',
    fontSize: 18,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
