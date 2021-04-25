import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { MealItem } from '../components';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  const selectedMeals = MEALS.filter(({ categoryIds }) => categoryIds.includes(categoryId));
  const mealItem = ({ item }) => (
    <MealItem
      title={item.title}
      imageUrl={item.imageUrl}
      duration={item.duration}
      affordability={item.affordability}
      complexity={item.complexity}
    />
  );

  return <FlatList keyExtractor={(item) => item.id} data={selectedMeals} renderItem={mealItem} />;
};

CategoryMealScreen.navigationOptions = ({ navigation }) => {
  const { title } = CATEGORIES.find(({ id }) => id === navigation.getParam('categoryId'));
  return {
    headerTitle: title,
  };
};

export default CategoryMealScreen;
