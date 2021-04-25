// @ts-nocheck
import React from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';
import { TitleText, IconText } from '../components';
import { COLORS, RADIUS } from '../constants/constants';

const MealItem = ({ title, imageUrl, duration, affordability, complexity, onSelect }) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground source={{ uri: imageUrl }} style={styles.background}>
            <View style={styles.overlay}>
              <TitleText style={styles.title} numberOfLines={1}>
                {title}
              </TitleText>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.descContainer}>
          <IconText dataIcon={{ name: 'time-outline' }}>{duration}m</IconText>
          <IconText dataIcon={{ name: 'restaurant-outline' }}>{complexity}m</IconText>
          <IconText dataIcon={{ name: 'wallet-outline' }}>{affordability}</IconText>
        </View>
      </View>
    </TouchableCmp>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    height: 200,
    position: 'relative',
    margin: 15,
    overflow: 'hidden',
    backgroundColor: COLORS.accent,
    ...RADIUS,
  },
  header: {
    height: '80%',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    color: COLORS.primary,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  descContainer: {
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textCharacteristic: {
    fontSize: 18,
  },
});
