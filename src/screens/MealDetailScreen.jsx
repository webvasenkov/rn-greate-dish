import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This Meal Detail Screen!</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
