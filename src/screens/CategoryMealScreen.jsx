import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryMealScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This Category Meal Screen!</Text>
    </View>
  );
};

export default CategoryMealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
