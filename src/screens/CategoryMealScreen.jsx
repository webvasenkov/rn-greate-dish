import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(({ id }) => id === categoryId);

  return (
    <View style={styles.container}>
      <Text>This Category! {selectedCategory.title}</Text>
      <Button title='Go To Meal Detail' onPress={() => navigation.navigate('MealDetail')} />
      <Button title='Go back' onPress={() => navigation.goBack()} />
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
