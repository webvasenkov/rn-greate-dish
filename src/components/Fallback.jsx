// @ts-nocheck
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TitleText from './Text/TitleText';

const Fallback = ({ text }) => {
  return (
    <View style={styles.container}>
      <TitleText>{text}</TitleText>
    </View>
  );
};

export default Fallback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
