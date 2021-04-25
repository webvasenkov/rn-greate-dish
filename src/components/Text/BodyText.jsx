import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = ({ children, style, restProps }) => (
  <Text style={[styles.text, style]} {...restProps}>
    {children}
  </Text>
);

export default BodyText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
