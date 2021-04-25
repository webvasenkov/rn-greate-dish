// @ts-nocheck
import React from 'react';
import { TouchableOpacity, View, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';
import { SHADOW } from '../constants/constants';
import TitleText from './Text/TitleText';

const CategoryItem = ({ onSelect, color, title }) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.container}>
      <TouchableCmp onPress={onSelect} style={styles.categoryItem}>
        <View style={[styles.card, { backgroundColor: color }]}>
          <TitleText numberOfLines={2} style={styles.title}>
            {title}
          </TitleText>
        </View>
      </TouchableCmp>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    margin: 15,
  },
  categoryItem: {
    flex: 1,
  },
  card: {
    flex: 1,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 8,
    ...SHADOW,
  },
  title: {
    textAlign: 'right',
  },
});
